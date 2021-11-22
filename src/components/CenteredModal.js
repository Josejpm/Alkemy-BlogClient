import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { deletePost } from "../redux/slices/posts/actions";

const CenteredModal = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, id, setShowModal, modalUse } = props;

  const handleDeleteBtn = () => {
    dispatch(deletePost(id));
    setShowModal(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("blog-token");
    navigate("/");
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalUse === "delete" ? "Delete post" : "Log out"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalUse === "delete" ? (
          <p>
            Delete <strong>{`${title}`} </strong> from Alkemy Blog ?
          </p>
        ) : (
          <p>Are you sure to log out</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        {modalUse === "delete" ? (
          <Button onClick={handleDeleteBtn} variant="danger">
            Yes, delete it!
          </Button>
        ) : (
          <Button onClick={handleLogOut} variant="danger">
            Yes, log out!
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CenteredModal;
