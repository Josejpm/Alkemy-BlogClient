import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {Offcanvas,Button} from 'react-bootstrap'
import { getPostById } from '../redux/slices/posts'

export const OptionsOffCanvas = ({post,show,setShow,setShowModal}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id,title}=post;

    const handleEditClick = () => {
        dispatch(getPostById(id));
        navigate(`/post/edit/${id}`);
      };
    
      const handleDetailsClick = () => {
        dispatch(getPostById(id));
        navigate(`/post/details/${id}`);
      };
    
      const handleClose = () => {
        setShow(false);
      };

    return (
        <Offcanvas show={show} onHide={handleClose} backdrop>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <span>Actions for:</span> {title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <Button
            className="green btn offset"
            onClick={() => handleDetailsClick()}
          >
            Details
          </Button>
          <Button className="green btn offset" onClick={() => handleEditClick()}>
            Edit
          </Button>
          <Button
            className="delete btn offset"
            onClick={() => setShowModal(true)}
            variant="danger"
          >
            Delete
          </Button>

        </Offcanvas.Body>
      </Offcanvas>
    )
}
