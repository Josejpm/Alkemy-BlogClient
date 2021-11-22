import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { Container } from "react-bootstrap";

//Components
import { NavBar } from "../components/NavBar";

//Redux
import { fetchPosts,clearSinglePost} from "../redux/slices/posts";
import { Paginate } from "../components/Paginate";
import { PostsTable } from "../components/PostsTable";

const Dashboard = () => {
  const navigate = useNavigate();
  const {posts} = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const token = localStorage.getItem('blog-token');
  if(!token){
      navigate('/');
  }

  useEffect(() => {
    dispatch(clearSinglePost())
    dispatch(fetchPosts());
  }, []);

  const perPage = 5;
  const maxPages = Math.ceil(posts.length/perPage);
  const [actualPage, setActualPage] = useState(1);
  const lastIndex = perPage * actualPage;
  const firstIndex = lastIndex - perPage;
  const currentPost = posts.slice(firstIndex, lastIndex);

  return (
    <Fragment>
      <NavBar />
      <Container className="dashboard-container" md="fluid">

        <h2 className="heading" >Your Alkemy Blog posts</h2>
        <PostsTable currentPost={currentPost} />
        <Paginate className="paginate" actualPage={actualPage} maxPages={maxPages} setActualPage={setActualPage} />  

      </Container>
    </Fragment>
  );
};

export default Dashboard;
