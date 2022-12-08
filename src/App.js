import React from "react";
import Weather from "./Weather";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Weather />
        <small>
          This app was coded by{" "}
          <a
            className="Profile-link"
            href="https://www.shecodes.io/graduates/49613-nataliia-ploskan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Natalia Ploskan
          </a>{" "}
          and is{" "}
          <a
            className="App-link"
            href="https://github.com/Natalia-Ploskan/weather-react-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </small>
      </header>
    </div>
  );
}

export default App;
