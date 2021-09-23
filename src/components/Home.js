import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typed from "react-typed";
import avatar from "../images/avatar.png";
import "../styles/homepage.scss";
import { parralax } from "../helpers";

const Introduction = () => {
  parralax();
  return (
    <div className="page homepage" id="home">
      <div
        className="d-flex flex-column justify-content-center align-items-center layer"
        data-speed="5"
      >
        <img src={avatar} className="homepage_avatar" alt="avatar" />
        <h1>Simon Bao</h1>
        <Typed
          className="mb-2 typed-text pl-2"
          strings={[
            "Hi my name is Simon",
            "I am a Software Engineer",
            "Web Developer",
            "And also an avid gamer",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <div className="d-flex flex-row justify-content-center">
          <a
            href="https://www.linkedin.com/in/simon-bao"
            rel="noreferrer"
            className="icon"
            target="_blank"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            href="https://github.com/SimonBao"
            className="icon"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub size={35} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
