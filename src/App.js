import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer>
          <div className="author">
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
              Netlify
            </a>
          </div>
          <div className="freepik-ref">
            Background image by{" "}
            <a
              href="https://www.freepik.com/free-vector/painted-mountain-view-landscape-illustration_2631389.htm#query=landscape&position=2&from_view=search&track=sph"
              target="_blank"
              rel="noreferrer"
            >
              rawpixel.com
            </a>{" "}
            on{" "}
            <a href="http://www.freepik.com/" target="_blank" rel="noreferrer">
              Freepik
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
