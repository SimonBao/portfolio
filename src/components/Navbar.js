import { FaBook, FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import "../styles/navbar.scss";
import avatar from "../images/avatar.png";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1180px)" });
  return (
    <div className="sidebar_left sticky-top col-1">
      <div>
        <img src={avatar} className="sidebar_avatar" alt="avatar" />
      </div>
      <div
        className={`navigation d-flex flex-column h-50 h-75 ${
          isSmallScreen ? "small_screen" : "large_screen"
        }`}
      >
        <a href="#home" className="icon">
          <FaHome />
          <span>Home</span>
        </a>
        <a href="#about" className="icon">
          <FaUser />
          <span>About</span>
        </a>
        <a href="#portfolio" className="icon">
          <FaUser />
          <span>Portfolio</span>
        </a>
        <a href="#experience" className="icon">
          <FaBook />
          <span>Experience</span>
        </a>
        <a href="#contact" className="icon">
          <FaEnvelope />
          <span>Contact</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
