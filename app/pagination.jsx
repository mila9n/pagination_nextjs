"use client";
import React from "react";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";
import { useContext } from "react";
import { context } from "@/components/context";

const Pagination = () => {
  const [totalPosts, setTotalPosts] = React.useState("");
  React.useEffect(() => {
    fetch("/api/allposts")
      .then((res) => res.json())
      .then((data) => setTotalPosts(data.posts.length));
  }, []);
  const { setCurrentPage } = useContext(context);
  const totalPages = totalPosts / 10;

  const handlePageChange = (e) => {
    setCurrentPage(e.selected + 1);
  };

  return (
    <div className="pagination">
      <ReactPaginate
        nextLabel=">"
        previousLabel="<"
        pageCount={totalPages}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={"paginationButtons"}
        activeClassName={"activeButton"}
        breakClassName={"breakButton"}
      />
    </div>
  );
};

export default Pagination;
