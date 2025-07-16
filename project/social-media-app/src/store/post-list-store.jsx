import { createContext,useEffect,useState, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching:false,
});

const PostListReducer = (currPostList, action) => {
  let newPostlist = currPostList;
  if (action.type === "DELETE") {
    newPostlist = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  else if(action.type==="ADD_POST"){
    newPostlist=[action.payload,...currPostList]
  }

  else if(action.type==="ADD_INITIAL_POSTS"){
    newPostlist=action.payload.posts
  }
  return newPostlist;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    []
  );

  const addPost = (post) => {
    console.log(`post created using addpost and added to the dummy server`)
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (postId) => {
    // console.log(`delete post called for ${postId}`)
    dispatchPostList({
      type: "DELETE",
      payload: {
        postId,
      },
    });
  };


  const addInitialPosts=(posts)=>{
    console.log(`addinitial post called!`)
    dispatchPostList({
      type:"ADD_INITIAL_POSTS",
      payload:{
        posts
      }
    })
  }

  const [fetching,setFetching]=useState(false);
  useEffect(()=>{
    setFetching(true);
    const controller=new AbortController();
    const {signal}=controller.signal;
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
        .then((data)=>{
          addInitialPosts(data.posts),
          setFetching(false)});
    
    return()=>{
      console.log("Cleaning up use effect");
      controller.abort();
    }
  },[])



  return (
    <PostList.Provider value={{ postList, addPost, deletePost,fetching }}>
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POSTLIST = [
//   {
//     id: "1",
//     title: "going to mumbai",
//     body: "hi friends finally going to mumbai",
//     reactions: 2,
//     userId: "user-12",
//     tags: ["vacation", "fun", "travel"],
//   },
//   {
//     id: "2",
//     title: "going to mumbai",
//     body: "hi friends finally going to mumbai",
//     reactions: 17,
//     userId: "user-17",
//     tags: ["vacation", "fun", "travel"],
//   },
// ];
export default PostListProvider;
