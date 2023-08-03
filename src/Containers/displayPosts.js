import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Navbar from "../Components/navbar";
import "../styles/paginator.scss";

export default function DisplayPosts() {
  const getPost = (page = 1) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((response) => {
        // console.clear();
        console.log(response.data);
        setPosts(response.data);
        setLoading(false);
      });
  };

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPost();
  }, []);

  const handlePageClick = (e) => {
    console.log(e.selected);
    setLoading(true);
    getPost(e.selected + 1);
  };

  const genPosts = () => {
    const allPost = [];
    posts.map((post) => {
      allPost.push(<Post {...post} />);
    });

    return allPost;
  };

  const allPost = genPosts();

  return (
    <div className="main">
      <Navbar />
      <h1 className="main-head">All posts</h1>
      <div className="posts">{loading ? <Loader /> : allPost}</div>
      <div className="paginate">
        <ReactPaginate
          previousLabel={"Back"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={10}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

const Post = (props) => {
  return (
    <article className="post">
      <h1 className="post-head" title={props.title}>
        <span className="num">{props.id}.</span>
        <span className="title">{props.title}</span>
      </h1>

      <div className="post-body">
        <p className="content">{props.body}...</p>
      </div>
    </article>
  );
};

const Loader = (props) => {
  return (
    <div className="loader">
      Loading...
      <i class="fas fa-sync-alt fa-spin"></i>
    </div>
  );
};
