import "./App.css";
import React, { useState } from "react";
import Button from "./components/Buttons/CustomButtonComponent";
import Countdown from "react-countdown";

import { BrowserRouter } from "react-router-dom";
import ModalManager from "./ModalManager";
import AppHeader from "./components/appheader/navbar";

let HolidaysArray = [
  "New Year's Day",
  "Christmas",
  "Easter",
  "Halloween",
  "Thanksgiving",
  "New Year's Eve",
  "Your Birthday",
  "School's Out",
];

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="timer container d-flex">
      {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
    </div>
  );
};

function MainPage() {
  const [modalOpen, setModal] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    const {
      target: {
        dataset: { modal },
      },
    } = event;
    if (modal) setModal(modal);
  };

  const closeModal = () => {
    setModal("");
  };

  return (
    <BrowserRouter>
      <AppHeader></AppHeader>
      <div className="App">
        {/* MAIN BODY */}
        <main className="app--screen screen--one">
          <header className="App-header">
            <br></br>
            <br></br>

            <h1>The Days Until...</h1>
            <div className="row">
              <ModalManager closeFn={closeModal} modal={modalOpen} />
              {/* modal One */}
              <div>
                <Button
                  type="button"
                  data-modal="modal-one"
                  backgroundColor="blue"
                  fontSize="24px"
                  borderColor="white"
                  borderWidth="10px"
                  color="white"
                  onClick={openModal}
                  height="100px"
                  radius="5%"
                  width="300px"
                  children="New Year's Day"
                  margin="10px"
                ></Button>
              </div>
              {/* Modal Two */}
              <div>
                <Button
                  data-modal="modal-two"
                  backgroundColor="red"
                  fontSize="24px"
                  borderColor="green"
                  borderWidth="10px"
                  color="white"
                  height="100px"
                  onClick={openModal}
                  radius="5%"
                  width="300px"
                  children="Christmas"
                  margin="10px"
                />

                <Countdown date={"2021-12-25T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[1]}!!!</h3>
              </div>
            </div>

            <div>
              <div>
                <Button
                  data-modal="modal-one"
                  backgroundColor="pink"
                  fontSize="24px"
                  borderColor="yellow"
                  borderWidth="10px"
                  color="black"
                  height="100px"
                  onClick={openModal}
                  width="300px"
                  children="Easter"
                  margin="10px"
                />

                <Countdown date={"2022-04-17T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[2]}!!!</h3>
              </div>
              <div>
                <Button
                  backgroundColor="darkorange"
                  fontSize="24px"
                  borderColor="grey"
                  borderWidth="10px"
                  color="black"
                  height="100px"
                  onClick={() => console.log("You clicked on Halloween!")}
                  radius="5%"
                  width="300px"
                  children="Halloween"
                  margin="10px"
                />
                <Countdown date={"2021-10-31T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[3]}!!!</h3>
              </div>
            </div>

            <div>
              <div>
                <Button
                  backgroundColor="darkorange"
                  fontSize="24px"
                  borderColor="white"
                  borderWidth="10px"
                  color="black"
                  height="100px"
                  onClick={() => console.log("You clicked on Thanksgiving!")}
                  radius="5%"
                  width="300px"
                  children="Thanksgiving"
                  margin="10px"
                />
                <Countdown date={"2021-11-25T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[4]}!!!</h3>
              </div>
              <div>
                <Button
                  backgroundColor="lightblue"
                  fontSize="24px"
                  borderColor="teal"
                  borderWidth="10px"
                  color="black"
                  height="100px"
                  onClick={() => console.log("You clicked on New Years Eve!")}
                  radius="5%"
                  width="300px"
                  children="New Years Eve"
                  margin="10px"
                />
                <Countdown date={"2021-12-31T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[5]}!!!</h3>
              </div>
            </div>

            <div>
              <div>
                <Button
                  backgroundColor="white"
                  fontSize="24px"
                  borderColor="red"
                  borderWidth="10px"
                  color="black"
                  height="100px"
                  onClick={() => console.log("You clicked on Your Birthday!")}
                  radius="5%"
                  width="300px"
                  children="Your Birthday!"
                  margin="10px"
                />
                <Countdown date={"2022-07-21T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[6]}!!!</h3>
              </div>
              <div>
                <Button
                  backgroundColor="yellow"
                  fontSize="24px"
                  borderColor="black"
                  borderWidth="10px"
                  color="black"
                  height="100px"
                  onClick={() => console.log("You clicked on School's Out!")}
                  radius="5%"
                  width="300px"
                  children="School's Out!"
                  margin="10px"
                />
                <Countdown date={"2022-05-16T01:00:00"} renderer={renderer} />
                <h3>Until {HolidaysArray[7]}!!!</h3>
              </div>
            </div>
          </header>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default MainPage;
