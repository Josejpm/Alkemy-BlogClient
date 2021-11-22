import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { NavBar } from "../components/NavBar";

import { newPost } from "../redux/slices/posts/actions";
import { PostForm } from "../components/PostForm";

export const NewPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const token = localStorage.getItem("blog-token");
  if (!token) {
    navigate("/");
  }

  useEffect(() => {
    if (posts.length === 0) {
      navigate("/dashboard");
    }
  }, []);

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Post title is required";
    } else if (values.title.length < 2) {
      errors.title = "Must be at least 2 characters long";
    }
    if (!values.body) {
      errors.body = "Post content is required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    validate,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = (values) => {
    dispatch(newPost(values));
    navigate("/dashboard");
  };

  return (
    <Fragment>
      <NavBar />
      <PostForm title="Add a new post" formik={formik} />
    </Fragment>
  );
};
