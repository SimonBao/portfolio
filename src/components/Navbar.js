import { FaLinkedin } from "react-icons/fa";
import "../styles/navbar.scss";
const Navbar = () => {
  return (
    <div className="sidebar_left sticky-top col-2">
      <div className="h-25"></div>
      <div className="navigation d-flex flex-column h-50">
        <a href="#home" className="icon">
          <FaLinkedin />
        </a>
        <a href="#about" className="icon">
          <FaLinkedin />
        </a>
        <a href="#experience" className="icon">
          <FaLinkedin />
        </a>
        <a href="#contact" className="icon">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
