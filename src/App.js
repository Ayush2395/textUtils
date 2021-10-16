// import logo from "./logo.svg";
import "./App.css";
// import Cards from "./Components/Cards";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";

function App() {
  let myTitle = ["ayush", "neha", "priya", "bhanu", "textUtils", "About us"];

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.color = "#343a40";
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <NavBar
        toggleMode={toggleMode}
        mode={mode}
        brand={myTitle[4]}
        aboutText={myTitle[5]}
      />
      <Alert alert={alert} />
      {/* <Cards/> */}
      <TextForm heading="Enter your text to analyze" />
    </>
  );
}

export default App;
