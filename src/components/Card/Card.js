import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ results, page }) => {
  let display;
  if (results) {
    display = results.map((item) => {
      let { id, name, image, location } = item;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="d-grid col-lg-4 col-md-6 col-12 mb-4 text-dark"
        >
          <div className="cards-main d-flex flex-column justify-content-center">
            <img src={image} alt="" className="img-fluid image-card" />
            <div className="content-card">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6">Last Location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    // eslint-disable-next-line no-unused-vars
    display = "Not Results Found :/";
  }
  return <>{display}</>;
};

export default Card;
