import React,{ Fragment, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { useFormik } from "formik";
import { Form, Button, Container } from "react-bootstrap";
import { NavBar } from "../components/NavBar";

import {newPost} from '../redux/slices/posts';

export const NewPost = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector(state => state.posts);
  const navigate = useNavigate();

  useEffect(() => {
    if(posts.length===0){
      navigate('/dashboard')
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
      title: "",
      body: "",
    },
    validate,
    onSubmit: (values) => handleSubmit(values),
  });


  const handleSubmit = (values) => {
    dispatch(newPost(values))
    navigate('/dashboard')
  };

  return (
    <Fragment>

      <NavBar/>
      <Container fluid="md">
        <h1>Add a new post</h1>

        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Post title here..."
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="body"
              onChange={formik.handleChange}
              value={formik.values.body}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};
