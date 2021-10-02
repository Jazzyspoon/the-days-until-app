import "./App.css";
import React from "react";
import { Button } from "reactstrap";
import Countdown from "react-countdown";
import { BrowserRouter } from "react-router-dom";
import AppHeader from "./components/appheader/Navbar";
import InputField from "./components/inputField/InputField";
import HoliData from "./components/Holidata";

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
                  onClick={() =>
                    console.log(`You clicked on ${HoliData[1][0].name}!`)
                  }
                  children={HoliData[1][0].name}
                  className="btn btn-success btn-lg btn-custom-lg"
                ></Button>
                <br />
                <br />
                <Countdown
                  id={1}
                  date={HoliData[1][0].date}
                  renderer={renderer}
                />
                <h3>
                  Until {HoliData[1][0].name}
                  !!!
                </h3>
              </div>

              <div className="buttonBox greenbackground">
                <Button
                  type="btn"
                  onClick={() =>
                    console.log(`You clicked on ${HoliData[0][13].name}!`)
                  }
                  children={HoliData[0][13].name}
                  className="btn btn-danger btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown
                  id={2}
                  date={HoliData[0][13].date}
                  renderer={renderer}
                />
                <h3>Until {HoliData[0][13].name}!!!</h3>
              </div>

              <div className="buttonBox yellowbackground">
                <Button
                  type="btn"
                  onClick={() =>
                    console.log(`You clicked on ${HoliData[1][13].name}!`)
                  }
                  children={HoliData[1][13].name}
                  className="btn btn-light btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={HoliData[1][13].date} renderer={renderer} />
                <h3>Until {HoliData[1][13].name}!!!</h3>
              </div>

              <div className="buttonBox orangebackground">
                <Button
                  type="btn"
                  onClick={() =>
                    console.log(`You clicked on ${HoliData[0][15].name}!`)
                  }
                  children={HoliData[0][15].name}
                  className="btn btn-warning btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={HoliData[0][15].date} renderer={renderer} />
                <h3>Until {HoliData[0][15].name}!!!</h3>
              </div>

              <div className="buttonBox yellowbackground">
                <Button
                  type="btn"
                  onClick={() =>
                    console.log(`You clicked on ${HoliData[0][12].name}!`)
                  }
                  children={HoliData[0][12].name}
                  className="btn btn-dark btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={HoliData[0][12].date} renderer={renderer} />
                <h3>Until {HoliData[0][12].name}!!!</h3>
              </div>

              <div className="buttonBox bluebackground">
                <Button
                  type="btn"
                  onClick={() =>
                    console.log(`You clicked on ${HoliData[0][16].name}!`)
                  }
                  children={HoliData[0][16].name}
                  className="btn btn-danger btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={HoliData[0][16].date} renderer={renderer} />
                <h3>Until {HoliData[0][16].name}!!!</h3>
              </div>

              <div className="buttonBox redbackground">
                <Button
                  type="btn"
                  onClick={() =>
                    console.log(`You clicked on ${HoliData[1][16].name}!`)
                  }
                  children={HoliData[1][16].name}
                  className="btn btn-info btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={HoliData[1][16].date} renderer={renderer} />
                <h3>Until {HoliData[1][16].name}!!!</h3>
              </div>

              <div className="buttonBox">
                <Button
                  type="btn"
                  onClick={() =>
                    console.log(`You clicked on ${HoliData[1][17].name}!`)
                  }
                  children={HoliData[1][17].name}
                  className="btn btn-success btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={HoliData[1][17].date} renderer={renderer} />
                <h3>Until {HoliData[1][17].name}!!!</h3>
              </div>

              <div className="buttonBox tealbackground">
                <Button
                  type="btn"
                  onClick={() =>
                    console.log(`You clicked on ${HoliData[1][7].name}!`)
                  }
                  children={HoliData[1][7].name}
                  className="btn btn-danger btn-lg btn-custom-lg"
                />
                <br />
                <br />
                <Countdown date={HoliData[1][7].date} renderer={renderer} />
                <h3>Until {HoliData[1][7].name}!!!</h3>
              </div>
              <InputField id="inputfield" />
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default MainPage;
