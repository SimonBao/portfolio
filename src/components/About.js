import React from "react";
import "../styles/about.scss";
import avatar from "../images/avatar-about.png";
import { ProgressBar } from 'react-bootstrap';
const About = () => {
  return (
    <div className="page" id="about">
      <div className="col-12">
        <h1 className="ml-2">About Me</h1>
      </div>
      <div className="col-12 d-flex flex-row">
        <div className="col-4 d-flex justify-content-center">
          <img src={avatar} alt="about-avatar" />
        </div>
        <div className="col-7 d-flex align-items-center about__card">
          <div className="col-12 d-flex flex-row">
            <div className="col-5 introduction">
              <span>
                ffdsdha, skjdfh kajsdhf kjsahd f j ksahdfjk sadhfkl asjh f
                klsjad hfkas jdh flksj dha fsha dsdha, skjdfh kajsdhf kjsahd f j
                ksahdfjk sadhfkl asjh f klsjad hfkas jdh flksj dha fsha
              </span>
            </div>
            <div className="col-7">
  <ProgressBar now="70" visuallyHidden />
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
