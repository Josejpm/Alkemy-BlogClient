import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router";

import {Button} from 'react-bootstrap'
import CenteredModal from './CenteredModal';

export const PostListItem = ({ post }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const {title,id} = post
  
  const handleClick = ()=>{

    navigate('/new-post');

  }


  return (
    <Fragment>
      <tr>
        <td>{title}</td>
        <td>
          <Button>Details</Button>
          <Button onClick={()=>handleClick()} >Edit</Button>
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
