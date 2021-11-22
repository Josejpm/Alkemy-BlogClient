import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";

//Components
import { NavBar } from "../components/NavBar";
import { PostForm } from "../components/PostForm";

//Redux
import { editPost } from "../redux/slices/posts/actions";

export const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.posts);
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("blog-token");
    if (!token) {
      navigate("/");
    } else if (posts.length === 0) {
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
      errors.content = "Post content is required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: posts[id - 1].title,
      body: posts[id - 1].body,
    },
    validate,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = (values) => {
    dispatch(editPost({ id, body: values }));
    navigate("/dashboard");
  };

  return (
    <Fragment>
      <NavBar />
      <PostForm title="Edit post" formik={formik} />
    </Fragment>
  );
};
