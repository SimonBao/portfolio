import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./styles/pages.scss";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 429px)" });
  return (
    <div className="d-flex flex-row" id="main-container">
      {!isMobile && <Navbar />}
      <div className="content col-11">
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
      {isMobile && <Navbar />}
    </div>
  );
}

export default App;
