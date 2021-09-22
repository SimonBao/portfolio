import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./styles/pages.scss";

function App() {
  return (
    <div className="d-flex flex-row" id="main-container">
      <Navbar />
      <div className="content col-10">
        <Home />
        <About />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
