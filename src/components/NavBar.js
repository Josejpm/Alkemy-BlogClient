import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/alkemyLogo.png";
import CenteredModal from "./CenteredModal";

export const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Nav className="app-header ">
      <div className="header__logo">
        <Link to={"/dashboard"} className="header__logo">
          <img src={logo} alt="Alkemy Logo" className="logo__img" />
          <h1>Alkemy Blog</h1>
        </Link>
      </div>
      <div>
        <Link
          to={"/post/new"}
          className="btn btn-outline-light d-md-inline-block"
        >
          Add post &#43;
        </Link>
        <Button
          variant="outline-danger"
          style={{ marginLeft: "2rem" }}
          className="d-inline-block"
          onClick={() => setShowModal(true)}
        >
          Log out
        </Button>
      </div>

      <CenteredModal
        title=""
        id=""
        show={showModal}
        setShowModal={setShowModal}
        onHide={() => {
          setShowModal(false);
        }}
      />
    </Nav>
  );
};
