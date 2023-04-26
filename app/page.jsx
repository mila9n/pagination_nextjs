import React from "react";
import AllPosts from "./allPosts";
import Pagination from "./pagination";

const page = () => {
  return (
    <div>
      <AllPosts />
      <Pagination />
    </div>
  );
};

export default page;
