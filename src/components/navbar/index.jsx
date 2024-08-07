import React from "react";
import "./navbar.css";
import { IoIosSearch } from "react-icons/io";
import { IoClipboardOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className="navcontainer">
        <div className="navl">
          <h1 style={{ color: "red", fontFamily: "Kalnia Glaze" }}>PHLOX</h1>
          <ul className="links">
            <li style={{ fontWeight: "bold" }}>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="others">
          <button className="login">Login</button>
          <IoIosSearch size={24} />
          <div className="badge">
            <IoClipboardOutline size={24} />
            <p className="bate">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
