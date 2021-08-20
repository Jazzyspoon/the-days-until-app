import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import "./timer.css";
import "../App.css";

// Random component
const NYTimer = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <NYTimer />;
  } else {
    // Render a countdown
    return (
      <div class="container d-flex">
        <br></br>
        <div class="timer">
          {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
        </div>
        <h3>Until New Year's Day!!!</h3>
      </div>
    );
  }
};

ReactDOM.render(
  <Countdown date={"2022-01-01T01:00:00"} renderer={renderer} />,
  document.getElementById("root")
);
