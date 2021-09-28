import React, { useState } from "react";
import PortfolioModal from "./PortfolioModal";
import "../styles/portfolio.scss";
import tgrHomepage from "../images/projects/enterthegreenroom/homepage.png";

const Portfolio = () => {
  return (
    <div className="page portfolio" id="portfolio">
      <div className="header">
        <h2>Portfolio</h2>
      </div>
      <div className="portfolio_grid">
        <PortfolioModal image={tgrHomepage} />
        <PortfolioModal image={tgrHomepage} />
        <PortfolioModal image={tgrHomepage} />
        <PortfolioModal image={tgrHomepage} />
      </div>
    </div>
  );
};

export default Portfolio;
