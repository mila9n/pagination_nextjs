import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <h1>{props.id}</h1>
      <h2>{props.name}</h2>
      <h3>{props.email}</h3>
      <p>{props.body}</p>
    </div>
  );
};

export default Post;
