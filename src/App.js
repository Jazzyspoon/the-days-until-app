import "./App.css";
import React from "react";
import { Button } from "reactstrap";
import Countdown from "react-countdown";
import { BrowserRouter } from "react-router-dom";
import AppHeader from "./components/appheader/Navbar";
import InputField from "./components/inputField/InputField";

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
    let holidayNames21 = [response.data.map().name];
    let holidayDates21 = [response.data.map().date];
    console.log(holidayNames21);
    console.log(holidayDates21);
  })
  .catch(function (error) {
    console.error(error);
  });

//calendar for 2022
axios
  .request(options22)
  .then(function (response) {
    // console.log(response.data);
    let holidayNames22 = [response.data.name];
    console.log(holidayNames22);
  })
  .catch(function (error) {
    console.error(error);
  });

const [holidays] = [
  {
    nyd: {
      id: 1,
      name: "New Year's Day",
      date: "2022-01-01T01:00:00",
    },
    xmas: {
      id: 2,
      name: "Christmas",
      date: "2021-12-25T01:00:00",
    },
    east: {
      id: 3,
      name: "Easter",
      date: "2022-04-17T01:00:00",
    },
    hall: {
      id: 4,
      name: "Halloween",
      date: "2021-10-31T01:00:00",
    },
    tg: {
      id: 5,
      name: "Thanksgiving",
      date: "2021-11-25T01:00:00",
    },
    nye: {
      id: 6,
      name: "New Year's Eve",
      date: "2021-12-31T01:00:00",
    },
    bd: {
      id: 7,
      name: "Your Birthday",
      date: "2022-07-21T01:00:00",
    },
    sch: {
      id: 8,
      name: "Last Day of School",
      date: "2022-05-16T01:00:00",
    },
    fourth: {
      id: 9,
      name: "4th of July",
      date: "2022-07-04T01:00:00",
    },
  },
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
                  children={holidays.nyd.name}
                  className="btn btn-success btn-lg btn-custom-lg"
                ></Button>
                <br />
                <br />
                <Countdown
                  id={1}
                  date={holidays.nyd.date}
                  renderer={renderer}
                />
                <h3>Until {holidays.nyd.name}!!!</h3>
              </div>

              <div className="buttonBox greenbackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on Christmas!")}
                  children={holidays.xmas.name}
                  className="btn btn-danger btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown
                  id={2}
                  date={holidays.xmas.date}
                  renderer={renderer}
                />
                <h3>Until {holidays.xmas.name}!!!</h3>
              </div>

              <div className="buttonBox yellowbackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on Easter!")}
                  children={holidays.east.name}
                  className="btn btn-light btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={holidays.east.date} renderer={renderer} />
                <h3>Until {holidays.east.name}!!!</h3>
              </div>

              <div className="buttonBox orangebackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on Halloween!")}
                  children={holidays.hall.name}
                  className="btn btn-warning btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={holidays.hall.date} renderer={renderer} />
                <h3>Until {holidays.hall.name}!!!</h3>
              </div>

              <div className="buttonBox yellowbackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on Thanksgiving!")}
                  children={holidays.tg.name}
                  className="btn btn-dark btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={holidays.tg.date} renderer={renderer} />
                <h3>Until {holidays.tg.name}!!!</h3>
              </div>

              <div className="buttonBox bluebackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on New Years Eve!")}
                  children={holidays.nye.name}
                  className="btn btn-danger btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={holidays.nye.date} renderer={renderer} />
                <h3>Until {holidays.nye.name}!!!</h3>
              </div>

              <div className="buttonBox redbackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on Your Birthday!")}
                  children={holidays.bd.name}
                  className="btn btn-info btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={holidays.bd.date} renderer={renderer} />
                <h3>Until {holidays.bd.name}!!!</h3>
              </div>

              <div className="buttonBox">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on School's Out!")}
                  children={holidays.sch.name}
                  className="btn btn-success btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={holidays.sch.date} renderer={renderer} />
                <h3>Until {holidays.sch.name}!!!</h3>
              </div>

              <div className="buttonBox tealbackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on 4th of July!")}
                  children={holidays.fourth.name}
                  className="btn btn-danger btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={holidays.fourth.date} renderer={renderer} />
                <h3>Until {holidays.fourth.name}!!!</h3>
              </div>
              <InputField value="#inputfield" />
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default MainPage;
