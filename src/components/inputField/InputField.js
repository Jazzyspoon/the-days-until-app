import React from "react";
// import PropTypes from "prop-types";
import { Input, Form, Button, Label } from "reactstrap";
import "./inputField.css";

const onClick = () => {
  console.log("click");
};
const InputField = (props) => {
  return (
    <div className="fieldBox">
      <Form className="add-form">
        <h3>Add your Own Holiday!</h3>
        <div className="form-control">
          <Label>Date of your Holiday:</Label>
          <Input
            // onChange={(e) => setDate(e.target.value)}
            // type="text"
            placeholder="mm/dd/yyyy"
          ></Input>
        </div>
        <div className="form-control">
          <Label>Name of Holiday:</Label>
          <Input
            // onChange={(e) => setHolidayName(e.target.value)}
            type="text"
            placeholder="Holiday"
          ></Input>
        </div>

        <Button className="btn btn-custom-lg" type="submit" onClick={onClick}>
          Add It
        </Button>
        <br></br>
        <div className="form__checkfield">
          <div className="form-check">
            <Input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></Input>

            <label className="form-check-label" type="flexCheckDefault">
              Set Reminder
            </label>
          </div>
        </div>
      </Form>
    </div>
  );
};

// inputField.propTypes = {};

export default InputField;
