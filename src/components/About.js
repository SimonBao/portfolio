import React from "react";
import "../styles/about.scss";
import LogoCarousel, { LogoImages } from "./LogoCarousel";
import avatar from "../images/avatar-about.png";
import { ProgressBar } from "react-bootstrap";
import { aboutResize } from "../helpers/index";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  aboutResize();
  return (
    <div className="page page_about" id="about">
      <div className="header">
        <h1>About Me</h1>
      </div>
      <div className="about_avatar__container">
        <img src={avatar} alt="about_avatar" className="about_avatar__image" />
      </div>
      <div className="about_details__container">
        <div className="about_details__card">
          <div className="about_me_container">
            <span className="about_me">
              I'm a London based Software Engineer/Web Developer who
              occasionally design things. I love coding and finding things that
              make it even more fun, which recently lead me to become addicted
              to Vim!
            </span>
          </div>
          <div id="progress_bar__container" className="">
            <span>HTML</span>
            <ProgressBar now="75" visuallyHidden variant="info" />
            <span>CSS</span>
            <ProgressBar now="85" visuallyHidden variant="success" />
            <span>Javascript - React/React Native</span>
            <ProgressBar now="90" visuallyHidden variant="warning" />
            <span>Ruby - Ruby on Rails</span>
            <ProgressBar now="85" visuallyHidden variant="danger" />
            <span>SQL</span>
            <ProgressBar now="70" visuallyHidden />
          </div>
        </div>
      </div>
      <div className="logos_container">
        {isSmallScreen ? (
          <div className="logos__static">{LogoImages()}</div>
        ) : (
          <LogoCarousel />
        )}
      </div>
    </div>
  );
};

export default About;
