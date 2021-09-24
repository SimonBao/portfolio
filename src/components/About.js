import React from "react";
import $ from "jquery";
import "../styles/about.scss";
import avatar from "../images/avatar-about.png";
import { ProgressBar } from "react-bootstrap";
import { aboutResize } from "../helpers/index";

const About = () => {
  aboutResize();
  // $(window).on("resize", function () {
  //   if ($(window).width() > 768) {
  //     $("#progress_bar__container").removeClass("col-9");
  //     $("#introduction__container").removeClass(
  //       "flex-column align-items-center"
  //     );
  //     $("#introduction").removeClass("col-10");
  //     $("#about__card").removeClass("col-12");
  //     $("#about_avatar__container").addClass("col-4");
  //   } else {
  //     $("#introduction__container").addClass("flex-column align-items-center");
  //     $("#about__card").addClass("col-12");
  //     $("#progress_bar__container").addClass("col-9");
  //     $("#introduction").addClass("col-10");
  //     $("#introduction__container").removeClass("flex-row");
  //     $("#about_avatar__container").removeClass("col-4");
  //   }
  // });
  return (
    <div className="page" id="about">
      <div className="col-12 about_header_container">
        <h1 className="ml-2">About Me</h1>
      </div>
      <div className="col-12 d-flex flex-row">
        <div
          id="about_avatar__container"
          className="col-4 d-flex justify-content-center"
        >
          <img src={avatar} alt="about-avatar" />
        </div>
        <div
          id="about__card"
          className="col-sm-12 col-md-7 col-lg-7 d-flex align-items-center about__card"
        >
          <div id="introduction__container" className="col-12 d-flex flex-row">
            <div
              id="introduction"
              className="col-5 col-sm-10 col-md-5 introduction"
            >
              <span>
                I'm a London based Software Engineer/Web Developer who
                occasionally design things. I love coding and finding things
                that make it even more fun, which recently lead me to become
                addicted to Vim!
              </span>
            </div>
            <div
              id="progress_bar__container"
              className="col-md-6 d-flex flex-column"
            >
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
      </div>
    </div>
  );
};

export default About;
