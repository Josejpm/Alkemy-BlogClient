import React from "react";
import { useNavigate } from "react-router-dom";
import nodata from "../assets/img/nodata.svg";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <p className="nodata-text"> Ups!! Post not found </p>
      <img className="not-found-image" src={nodata} alt="not found" />
      <button className="form-button small" onClick={handleClick}>
        Back Home
      </button>
    </div>
  );
};
