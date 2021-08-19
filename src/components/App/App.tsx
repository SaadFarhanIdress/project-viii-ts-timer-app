import Timer from "../Timer/Timer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Timer />
      <p className="bottom-div">
        Made with
        <img
          className="image"
          width="20"
          height="20"
          alt="Heart"
          src="https://cdn.iconscout.com/icon/free/png-256/heart-1767836-1502416.png"
        />
        by <a href="http://www.github.com/SaadFarhanIdress">Saad Farhan</a>
        <br />
        Don't forget to star my repository :) <br />
        Link:
        <a href="https://github.com/SaadFarhanIdress/project-viib-ts-timer-app">
          https://github.com/SaadFarhanIdress/project-viib-ts-timer-app
        </a>
      </p>
    </div>
  );
}

export default App;
