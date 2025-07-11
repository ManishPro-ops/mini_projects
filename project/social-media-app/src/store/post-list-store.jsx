import { createContext, useContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts:()=>{},
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
    // 
    []
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    console.log(' post created using addpost')
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id:Date.now(),
        title: postTitle,
        body: postBody,
        reactions:reactions,
        userId:userId,
        tags: tags,
      },
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
  return (
    <PostList.Provider value={{ postList, addPost, deletePost,addInitialPosts }}>
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
