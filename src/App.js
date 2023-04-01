import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Pauline Jung and is on
          <a
            href="https://github.com/jungpauline/weather_app_new"
            target="_blank"
            rel="noreferrer">
            {" "}
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
