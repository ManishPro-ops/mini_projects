import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {


  const {deletePost}=useContext(PostList);
  return (
    <div>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={()=>deletePost(post.id)}>
              <RxCross2 />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge rounded-pill text-bg-primary hashtag">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reaction " role="alert">
            {`your post has been reacted by ${post.reactions}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
