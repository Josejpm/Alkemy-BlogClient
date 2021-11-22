import React, { Fragment, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { NavBar } from "../components/NavBar";

const PostDetails = () => {
  const { singlePost, posts, error } = useSelector((state) => state.posts);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    const token = localStorage.getItem("blog-token");
    if (!token) {
      navigate("/");
    } else if (posts.length === 0) {
      navigate("/dashboard");
    }
  }, []);

  if (error) {
    navigate("/no-data");
  }

  return (
    <Fragment>
      <NavBar />
      <Container className="details-container" md="fluid">
        <h2 className="heading">Post details</h2>
        <Card>
          <Card.Header>{singlePost.title}</Card.Header>
          <Card.Body>
            <Card.Text>{singlePost.body}</Card.Text>
            <Button onClick={handleClick} className="green">
              Go back
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </Fragment>
  );
};

export default PostDetails;
