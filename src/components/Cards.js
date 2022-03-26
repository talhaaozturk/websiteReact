import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="card--items">
            <CardItem
              src="/img/pexels-jaime-reimer-2662116.jpg"
              text="Unique view of moraine lake"
              path="/services"
              label="Adventure"
            />
            <CardItem
              src="/img/pexels-jaime-reimer-2662116.jpg"
              text="Unique view of moraine lake"
              path="/services"
              label="Adventure"
            />
          </ul>
          <ul className="card--items">
            <CardItem
              src="/img/pexels-jaime-reimer-2662116.jpg"
              text="Unique view of moraine lake"
              path="/services"
              label="Adventure"
            />
            <CardItem
              src="/img/pexels-jaime-reimer-2662116.jpg"
              text="Unique view of moraine lake"
              path="/services"
              label="Adventure"
            />
            <CardItem
              src="/img/pexels-jaime-reimer-2662116.jpg"
              text="Unique view of moraine lake"
              path="/services"
              label="Adventure"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Cards;
