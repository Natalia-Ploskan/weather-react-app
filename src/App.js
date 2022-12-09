import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
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
        </footer>
      </div>
    </div>
  );
}

export default App;
