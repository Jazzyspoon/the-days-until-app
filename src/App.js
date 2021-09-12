import "./App.css";
import React from "react";
import { Button } from "reactstrap";
import Countdown from "react-countdown";
import { BrowserRouter } from "react-router-dom";
import AppHeader from "./components/appheader/navbar";

var axios = require("axios").default;

//axios 2021 API
var options = {
  method: "GET",
  url: "https://public-holiday.p.rapidapi.com/2021/US",
  headers: {
    "x-rapidapi-host": "public-holiday.p.rapidapi.com",
    "x-rapidapi-key": "a3a4ad724dmshb86a40c33440528p171084jsnc8e6ad600e2a",
  },
};
//axios 2022 API
var options22 = {
  method: "GET",
  url: "https://public-holiday.p.rapidapi.com/2022/US",
  headers: {
    "x-rapidapi-host": "public-holiday.p.rapidapi.com",
    "x-rapidapi-key": "a3a4ad724dmshb86a40c33440528p171084jsnc8e6ad600e2a",
  },
};

//options for 2021
axios
  .request(options)
  .then(function (response) {
    let holidayList21 = [response.data];
    console.log(holidayList21);
  })
  .catch(function (error) {
    console.error(error);
  });

//calendar for 2022
axios
  .request(options22)
  .then(function (response) {
    // console.log(response.data);
    let holidayList22 = [response.data];
    console.log(holidayList22);
  })
  .catch(function (error) {
    console.error(error);
  });

let HolidaysArray = [
  "New Year's Day",
  "Christmas",
  "Easter",
  "Halloween",
  "Thanksgiving",
  "New Year's Eve",
  "Your Birthday",
  "School's Out",
  "4th of July",
];

//using Countdown clocks
let completed = <div>"It's here!!!!"</div>;
const renderer = ({ days, hours, minutes, seconds }) => {
  if (Date === new Date(0, 0, 0, 0)) return completed;
  else
    return (
      <div className="timer container d-flex ">
        {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
      </div>
    );
};
class MainPage extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppHeader></AppHeader>
        <div className="App">
          <main className="app--screen">
            <header className="App-header">
              <h1>The Days Until...</h1>
            </header>

            <div className="timegrid">
              <div className="buttonBox">
                <Button
                  onClick={() => console.log("You clicked on New Years Day!")}
                  children="New Year's Day"
                  className="btn btn-success btn-lg btn-custom-lg"
                ></Button>
                <br />
                <br />
                <Countdown date={"2022-01-01T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[0]}!!!</h3>
              </div>

              <div className="buttonBox greenbackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on Christmas!")}
                  children="Christmas"
                  className="btn btn-danger btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={"2021-12-25T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[1]}!!!</h3>
              </div>

              <div className="buttonBox yellowbackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on Easter!")}
                  children="Easter"
                  className="btn btn-light btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={"2022-04-17T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[2]}!!!</h3>
              </div>

              <div className="buttonBox orangebackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on Halloween!")}
                  children="Halloween"
                  className="btn btn-warning btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={"2021-10-31T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[3]}!!!</h3>
              </div>

              <div className="buttonBox yellowbackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on Thanksgiving!")}
                  children="Thanksgiving"
                  className="btn btn-dark btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={"2021-11-25T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[4]}!!!</h3>
              </div>

              <div className="buttonBox bluebackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on New Years Eve!")}
                  children="New Years Eve"
                  className="btn btn-danger btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={"2021-12-31T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[5]}!!!</h3>
              </div>

              <div className="buttonBox redbackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on Your Birthday!")}
                  children="Your Birthday!"
                  className="btn btn-info btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={"2022-07-21T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[6]}!!!</h3>
              </div>

              <div className="buttonBox">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on School's Out!")}
                  children="School's Out!"
                  className="btn btn-success btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={"2022-05-16T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[7]}!!!</h3>
              </div>

              <div className="buttonBox tealbackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on 4th of July!")}
                  children="4th of July!"
                  className="btn btn-danger btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={"2022-07-04T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[8]}!!!</h3>
              </div>
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default MainPage;
