import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./styles/pages.scss";
import { useMediaQuery } from "react-responsive";

function App() {
  const isLaptop = useMediaQuery({ query: "(max-width: 1365px)" });
  return (
    <div className="d-flex flex-row" id="main-container">
      <Navbar />
      <div className={`content ${isLaptop ? "col-10" : "col-11"}`}>
        <Home />
        <About />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
