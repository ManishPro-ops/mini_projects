import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";

const PostList = () => {
  const { postList,fetching } = useContext(PostListData);
  
  return (
    <div>
      {fetching && <Loading/>}
      {!fetching && postList.length === 0 && (
        <WelcomeMessage 
        // onGetPostClicked={handleonGetPostClicked} 
        />
      )}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
