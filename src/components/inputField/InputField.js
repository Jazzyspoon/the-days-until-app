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
const onClick = (props) => {
  // Create a single object, not an array of objects
  let newHoli = {
    id: Math.round(Math.random() * 1000),
    date: dateRender(new Date(document.getElementById('date').value)),
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    image: 'https://via.placeholder.com/150' // Default image
  };

  // Add the new holiday to the HoliData array
  HoliData.push(newHoli);
  console.log(HoliData);

  // Clear the form fields
  document.getElementById('name').value = '';
  document.getElementById('date').value = '';
  document.getElementById('description').value = '';

  // Call the reloadCards method from the parent component to update the UI
  if (props.reloadCards) {
    props.reloadCards();
  }
};

const InputField = (props) => {
  return (
    <div className='fieldBox' id='inputfield'>
      <Form>
        <Label for='name'>New Holiday Name</Label>
        <Input type='text' name='name' id='name' placeholder='Name' required />
        <Label for='date'>Date</Label>
        <Input type='date' name='date' id='date' placeholder='Date' required />
        <Label for='description'>Description</Label>
        <Input
          type='textarea'
          name='description'
          id='description'
          placeholder='Description'
        />
        <Button className='btn' onClick={() => onClick(props)}>
          Add Holiday
        </Button>
      </Form>
    </div>
  );
};

export default InputField;
