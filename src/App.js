import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import About from "./component/About";
import TextForm from "./component/TextForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

let name = "Kishor";
function App() {
  return (
    <>
      <Router>
        <Navbar title="PlayWithTexts" aboutText="About Us" />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={<TextForm textTitle="Enter Text To Check" />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
