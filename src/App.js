// import logo from "./logo.svg";
import "./App.css";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform";
import React, { useState } from "react";
import Alert from "./Component/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode is enabled", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#18175b";
      showalert("Dark mode is enabled", "success");
    }
  };
  return (
    <Router>
      <div>
        <Navbar title="Textutil" mode={mode} togglemode={togglemode} />
        {/* <Alert alert={alert} /> */}
        <Routes>
            <Route
              exact
              path="/"
              element={
                <Textform
                  heading="Enter your heading"
                  showalert={setalert}
                  mode={mode}
                />
              }
            />


          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
