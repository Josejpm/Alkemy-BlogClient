import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";

import CenteredModal from "./CenteredModal";
import { OptionsOffCanvas } from "./OptionsOffCanvas";

export const PostListItem = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const { title, id } = post;

  return (
    <Fragment>
      <tr>
        <td className="td-wrapper">
          <p className="post-title"> {title} </p>{" "}
          <Button className="green btn" onClick={() => setShow(true)}>
            Options
          </Button>
        </td>

        <OptionsOffCanvas
          post={post}
          show={show}
          setShow={setShow}
          setShowModal={setShowModal}
        />
      </tr>

      <CenteredModal
        modalUse="delete"
        title={title}
        id={id}
        show={showModal}
        setShowModal={setShowModal}
        onHide={() => {
          setShowModal(false);
          setShow(false);
        }}
      />
    </Fragment>
  );
};
