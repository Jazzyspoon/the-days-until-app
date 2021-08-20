import React from "react";
import Modal from "@material-ui/core/Modal";

import Countdown from "react-countdown";
import "../../App.css";
const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="timer container d-flex">
      {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
    </div>
  );
};
const NewYearsDayModal = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>Modal One</h1>
          </header>
          <div className="modal--body">
            <div>
              <Countdown
                date={"2022-01-01T01:00:00"}
                renderer={renderer}
                data="New Year's Day"
              />
              <h3>Until New Years Day!!!</h3>
            </div>
          </div>
          <footer className="modal--footer">
            <button type="button" onClick={closeFn}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </Modal>
  );
};

export default NewYearsDayModal;
