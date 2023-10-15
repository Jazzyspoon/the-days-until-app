import React from 'react';
import { Input, Form, Button, Label } from 'reactstrap';
import HoliData from '../Holidata';
import './inputField.css';

const dateRender = (date) => {
  // make the date output 'yyyy-mm-dd'
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${year}-${month}-${day}`;
};

//click the button and create a new holiday and add it to the HoliData array then add a new card to the page
const onClick = () => {
  debugger;
  let newHoli = {
    id: Math.round(Math.random(1, 100) * 1000),
    date: dateRender(new Date(document.getElementById('date').value)),
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
  };
  HoliData.push(newHoli);
};

const InputField = (props) => {
  return (
    <div className='fieldBox'>
      <Form>
        <Label for='name'>New Holiday Name</Label>
        <Input type='text' name='name' id='name' placeholder='Name' />
        <Label for='date'>Date</Label>
        <Input type='date' name='date' id='date' placeholder='Date' />
        <Input
          type='description'
          name='description'
          id='description'
          placeholder='Description'
        />
        <Button className='btn' onClick={onClick}>
          Add Holiday
        </Button>
      </Form>
    </div>
  );
};

// inputField.propTypes = {};

export default InputField;
