import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ src, text, path, label }) => {
  return (
    <>
      <li className="cards--item">
        <Link to={path} className="cards--item--link">
          <figure className="cards--item--pic-wrap" data--category={label}>
            <img
              src={src}
              alt="Travel Image"
              className="cards--item--img"
            ></img>
          </figure>
          <div className="cards--item--info">
            <h1 className="cards--item--text">{text}</h1>
          </div>
        </Link>
      </li>
    </>
  );
};
export default CardItem;
