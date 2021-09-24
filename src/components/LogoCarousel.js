import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UAParser from "ua-parser-js";
import {
  RubyLogo,
  JavascriptLogo,
  NodeJsLogo,
  AngularLogo,
  GraphQLogo,
  CSSLogo,
  HTML5Logo,
} from "../images/logos";

export const LogoImages = () => [
  <img src={RubyLogo} alt="" />,
  <img src={JavascriptLogo} alt="" />,
  <img src={NodeJsLogo} alt="" />,
  <img src={AngularLogo} alt="" />,
  <img src={GraphQLogo} alt="" />,
  <img src={CSSLogo} alt="" />,
  <img src={HTML5Logo} alt="" />,
];

const LogoCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 765 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 765, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  let userAgent = navigator.userAgent;
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={deviceType !== "mobile" ? true : false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={2000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "desktop"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
    {LogoImages()}
    </Carousel>
  );
};

export default LogoCarousel;
