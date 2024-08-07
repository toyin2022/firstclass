import React from "react";
import hero from "../../assets/hero.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="herocontainer">
        <img className="heroImg" src={hero} alt="hero" />
        <div className="herotexts">
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Beats Solo</p>
          <p style={{ fontSize: "3rem", fontWeight: "bolder" }}>Wireless</p>
          <p
            style={{
              fontSize: "9rem",
              fontWeight: "bold",
              width: "100%",
              fontFamily: "Rubik Mono One",
              fontStretch: "ultra-expanded",
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            HEADPHONE
          </p>
        </div>
        <div className="ded">
          <button
            style={{
              padding: "0.6rem 2rem",
              width: "23%",
              height: "6vh",
              borderRadius: "20px",
              backgroundColor: "red",
              color: "white",
              border: "none",
            }}
          >
            Shop By Category
          </button>
          <div style={{ width: "20%" }} className="">
            <p style={{ fontWeight: "bold" }}>Description</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos similique ad velit tempora, possimus nulla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
