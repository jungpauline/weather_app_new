import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/pauline-jung-8a0515150/"
            target="_blank"
            rel="noreferrer"
          >
            Pauline Jung
          </a>{" "}
          and is on{" "}
          <a
            href="https://github.com/jungpauline/weather_app_new"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          , hosted on{" "}
          <a
            href="https://friendly-cocada-015779.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
