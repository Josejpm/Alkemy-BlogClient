import React, { Fragment,useEffect } from "react";
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";


import {NavBar} from '../components/NavBar';

const PostDetails = () => {
  const {singlePost,posts} = useSelector(state => state.posts);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("blog-token");
    if (!token) {
      navigate("/");
    } else if(posts.length===0){
      console.log('Entro aqui')
      navigate('/dashboard')
    }
  }, []);

  return (
    <Fragment>
        <NavBar/>
        <h1>Post details</h1>
        <h2> {singlePost.title} </h2>
        <p>  {singlePost.body} </p>
    </Fragment>
  );
};

export default PostDetails;
