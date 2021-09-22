import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typed from "react-typed";

const Introduction = () => {
  return (
    <div
      className="page introduction d-flex flex-column justify-content-center align-items-center"
      id="home"
    >
      <h1>Simon Bao</h1>
      <Typed
        className="mb-2"
        strings={[
          "Hi my name is Simon",
          "I am a Software Engineer/Web Developer",
          "Also an avid gamer",
        ]}
        typeSpeed={40}
        backSpeed={60}
        loop
      />
      <div className="d-flex flex-row">
        <a
          href="https://www.linkedin.com/in/simon-bao"
          className="icon"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/SimonBao" className="icon" target="_blank">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Introduction;
