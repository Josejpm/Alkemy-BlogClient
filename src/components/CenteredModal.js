import React from 'react'
import { useDispatch } from 'react-redux';
import {Modal,Button} from 'react-bootstrap';

import {deletePost} from '../redux/slices/posts'

const CenteredModal = (props) => {

  const dispatch = useDispatch();
  const {title,id,setShowModal} = props

  const handleDeleteBtn = ()=>{
    dispatch(deletePost(id))
    setShowModal(false)
  }

    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Delete Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Delete <strong>{`${title}`} </strong> from Alkemy Blog ?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleDeleteBtn} variant="danger" >Yes, delete it!</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CenteredModal
