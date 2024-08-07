import React from "react";
import "./herocard.css";

const HeroCards = () => {
  return (
    <div className="herocard">
      <div className="cardContainer">
        <div className="top">
          <div className="card" style={{ backgroundColor: "black" }}></div>
          <div className="card" style={{ backgroundColor: "yellow" }}></div>
          <div className="card" style={{ backgroundColor: "red" }}></div>
        </div>
        <div className="bottom">
          <div className="card" style={{ backgroundColor: "gray" }}></div>
          <div
            className="card"
            style={{ backgroundColor: "rgba(0, 255, 0, 0.5)" }}
          ></div>
          <div
            className="card"
            style={{ backgroundColor: "rgba(0, 0, 255, 0.5)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
