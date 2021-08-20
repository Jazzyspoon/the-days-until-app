import "./App.css";
import React from "react";
import Button from "./components/CustomButtonComponent";
import Countdown from "react-countdown";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Modal,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { animated } from "react-spring";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      {/* NAVBAR */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="primary" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">The Days Until.....</Typography>

          <Button
            backgroundColor="blue"
            fontSize="16px"
            borderColor="white"
            borderWidth="10px"
            onClick={() => console.log("add a holiday")}
            radius="4%"
            children="add a holiday"
            margin="10px"
            color="white"
          >
            Add a Holiday
          </Button>
          <Button
            backgroundColor="blue"
            fontSize="16px"
            borderColor="white"
            borderWidth="10px"
            onClick={() => console.log("add a birthday!")}
            radius="4%"
            children="Add a Birthday"
            margin="10px"
            color="white"
          >
            Add a Birthday
          </Button>
        </Toolbar>
      </AppBar>

      <header className="App-header">
        <br></br>
        <br></br>
        <br></br>
        <h1>The Days Until...</h1>
        <div className="row">
          <animated.div>
            <Button
              backgroundColor="blue"
              fontSize="24px"
              borderColor="white"
              borderWidth="10px"
              color="white"
              height="100px"
              onClick={handleOpen}
              radius="5%"
              width="300px"
              children="New Year's Day"
              margin="10px"
            />
            <Modal
              className="paper"
              aria-labelledby="spring-modal-title"
              aria-describedby="spring-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropProps={{
                timeout: 500,
              }}
            >
              <div>
                <Countdown
                  date={"2022-01-01T01:00:00"}
                  renderer={renderer}
                  data="New Year's Day"
                />
                <h3>Until {HolidaysArray[0]}!!!</h3>
              </div>
            </Modal>
          </animated.div>
          <div>
            <Button
              backgroundColor="red"
              fontSize="24px"
              borderColor="green"
              borderWidth="10px"
              color="white"
              height="100px"
              onClick={() => console.log("You clicked on Christmas!")}
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
              backgroundColor="pink"
              fontSize="24px"
              borderColor="yellow"
              borderWidth="10px"
              color="black"
              height="100px"
              onClick={() => console.log("You clicked on Easter!")}
              radius="5%"
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
    </div>
  );
}

export default MainPage;
