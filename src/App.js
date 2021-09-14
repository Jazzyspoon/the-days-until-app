import "./App.css";
import React from "react";
import { Button } from "reactstrap";
import Countdown from "react-countdown";
import { BrowserRouter } from "react-router-dom";
import AppHeader from "./components/appheader/Navbar";
import InputField from "./components/inputField/InputField";
import MockData21 from "./components/MockData21";
import MockData22 from "./components/MockData22";
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
const holidays21 = [];
const populateData = (data) => {
  holidays21.push(data);
};
//options for 2021
axios
  .request(options)
  .then(function (response) {
    populateData(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

//calendar for 2022
axios
  .request(options22)
  .then(function (response) {
    populateData(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

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
                  children={MockData22[0].name}
                  className="btn btn-success btn-lg btn-custom-lg"
                ></Button>
                <br />
                <br />
                <Countdown
                  id={1}
                  date={MockData22[0].date}
                  renderer={renderer}
                />
                <h3>
                  Until {MockData22[0].name}
                  !!!
                </h3>
              </div>

              <div className="buttonBox greenbackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on Christmas!")}
                  children={MockData21[13].name}
                  className="btn btn-danger btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown
                  id={2}
                  date={MockData21[13].date}
                  renderer={renderer}
                />
                <h3>Until {MockData21[13].name}!!!</h3>
              </div>

              <div className="buttonBox yellowbackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on Easter!")}
                  children={MockData22[13].name}
                  className="btn btn-light btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={MockData22[13].date} renderer={renderer} />
                <h3>Until {MockData22[13].name}!!!</h3>
              </div>

              <div className="buttonBox orangebackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on Halloween!")}
                  children={MockData21[15].name}
                  className="btn btn-warning btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={MockData21[15].date} renderer={renderer} />
                <h3>Until {MockData21[15].name}!!!</h3>
              </div>

              <div className="buttonBox yellowbackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on Thanksgiving!")}
                  children={MockData21[12].name}
                  className="btn btn-dark btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={MockData21[12].date} renderer={renderer} />
                <h3>Until {MockData21[12].name}!!!</h3>
              </div>

              <div className="buttonBox bluebackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on New Years Eve!")}
                  children={MockData21[16].name}
                  className="btn btn-danger btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={MockData21[16].date} renderer={renderer} />
                <h3>Until {MockData21[16].name}!!!</h3>
              </div>

              <div className="buttonBox redbackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on Your Birthday!")}
                  children={MockData22[16].name}
                  className="btn btn-info btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={MockData22[16].date} renderer={renderer} />
                <h3>Until {MockData22[16].name}!!!</h3>
              </div>

              <div className="buttonBox">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on School's Out!")}
                  children={MockData22[17].name}
                  className="btn btn-success btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={MockData22[17].date} renderer={renderer} />
                <h3>Until {MockData22[17].name}!!!</h3>
              </div>

              <div className="buttonBox tealbackground">
                <Button
                  type="btn"
                  onClick={() => console.log("You clicked on 4th of July!")}
                  children={MockData22[7].name}
                  className="btn btn-danger btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={MockData22[7].date} renderer={renderer} />
                <h3>Until {MockData22[7].name}!!!</h3>
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
