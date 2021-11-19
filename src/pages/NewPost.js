import React,{useState} from "react";
import {Form,Button} from 'react-bootstrap'

export const NewPost = () => {

    const [formValues, setFormValues] = useState({
        title:'',
        content:''
    });

    const {title,content} = formValues;

    const handleChange = (e)=>{
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }


  return (
    <div>

      <h1>Add a new post</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            name="title"
            placeholder="Post title here..."
            onChange={handleChange}
            value={title}
            
        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Content</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={2}
            name="content"
            onChange={handleChange}
            value={content}
        />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
