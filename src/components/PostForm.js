import React from 'react';
import { Form, Button, Container,Alert } from "react-bootstrap";

export const PostForm = ({title,formik}) => {

    return (
        <Container fluid="md">
        <h2 className="heading">{title}</h2>

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
          {formik.errors.title ?  <Alert variant="danger" > {formik.errors.title} </Alert>  : null }

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="body"
              onChange={formik.handleChange}
              value={formik.values.body}
            />
          </Form.Group>
          {formik.errors.body ?  <Alert variant="danger" > {formik.errors.body} </Alert>  : null }

          <Button className='green btn' type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    )
}
