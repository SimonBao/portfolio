import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="d-flex flex-row" id="main-container">
      <div className="sidebar_left sticky-top col-2">sidebar</div>
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
