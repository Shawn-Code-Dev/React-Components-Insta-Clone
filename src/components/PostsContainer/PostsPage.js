//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import "./PostHeader";
import "./LikeSection";
import dummyData from "../../dummy-data";

const PostsPage = () => {
  const [data] = useState(dummyData)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
      data.map((uId, p) => (
        <Post key={p} post={uId} />
      ))
      }
    </div>
  );
};

export default PostsPage;

