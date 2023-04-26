"use client";

import { context } from "@/components/context";
import React, { useContext } from "react";
import Post from "@/components/post";
import "../styles/posts.css";

const AllPosts = () => {
  const { currentPage } = useContext(context);
  const postsPerPage = 10;

  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch(`/api/posts?page=${currentPage}&limit=${postsPerPage}`)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, [currentPage]);

  const postsArr = posts?.map((post) => {
    return (
      <Post
        key={post.id}
        id={post.id}
        name={post.name}
        body={post.body}
        email={post.email}
      />
    );
  });

  return <div className="posts_container">{postsArr}</div>;
};

export default AllPosts;
