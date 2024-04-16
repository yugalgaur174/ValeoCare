import valeo from "../assets/valeo_logo.png";
import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
// import Forum from "./Forum.jsx";

function Home() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={valeo} alt="valeo_logo"></img>
        <ul className="sections">
          <li>
            <a href=" ">Home</a>
          </li>
          <li>
            <Link to="/Forum"><a href=" ">Community Forum</a></Link>
          </li>
          <li>
            <a href=" ">Resources</a>
          </li>
          <li>
            <a href=" ">About Us</a>
          </li>
        </ul>
      </div>
      <div className="home">
        <h1 className="heading">
          Join Our Community for Sustainable Automotive Repair Solutions.
        </h1>
        <p className="desc">
          Empowering automotive enthusiasts with access to repair guides,
          collaboration with experts, and community support.
        </p>
        <div className="button_container">
          <Link to="/Forum" className="forum_button">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
