import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {Button} from 'react-bootstrap'
import { getPostById } from "../redux/slices/posts";

import CenteredModal from './CenteredModal';

export const PostListItem = ({ post }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const {title,id} = post
  
  const handleEditClick = ()=>{
    dispatch(getPostById(id));
    navigate(`/post/edit/${id}`);
  }

  const handleDetailsClick = ()=>{
    dispatch(getPostById(id));
    navigate(`/post/details/${id}`);
  }

  return (
    <Fragment>
      <tr>
        <td>{title}</td>
        <td>
          <Button onClick={()=>handleDetailsClick()} >Details</Button>
          <Button onClick={()=>handleEditClick()} >Edit</Button>
          <Button onClick={()=>setShowModal(true)} variant="danger" >Delete</Button>
        </td>
      </tr>

      <CenteredModal
        title={title}
        id={id}
        show={showModal}
        setShowModal={setShowModal}
        onHide={() => setShowModal(false)}
      />
    </Fragment>
  );
};
