import './App.css';
import React from 'react';
//import { Button } from 'reactstrap';
//import Countdown from 'react-countdown';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './components/appheader/navbar.js';
import InputField from './components/inputField/InputField.js';
import HoliData from './components/Holidata';
import DateCardComponent from './components/cardcomponent/date-card-component';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HoliData: HoliData,
      isOpen: true,
      id: this.props.id,
      date: this.props.date,
      name: this.props.name,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <AppHeader></AppHeader>
        <div className='App'>
          <main className='app--screen'>
            <header className='App-header'>
              <h1>The Days Until...</h1>
            </header>

            <div className='timegrid'>
              {this.state.HoliData.map((holiday) => {
                //if the date has already passed or is more than year from now, don't show it, else show it
                if (
                  new Date(holiday.date) < new Date() ||
                  new Date(holiday.date) >
                    new Date(new Date().getFullYear() + 1, 0, 0)
                ) {
                  return null;
                }
                return (
                  <DateCardComponent
                    key={holiday.id}
                    id={holiday.id}
                    date={holiday.date}
                    name={holiday.name}
                  />
                );
              })}
            </div>
          </main>
          <InputField
            HoliData={this.state.HoliData}
            isOpen={this.state.isOpen}
          ></InputField>
        </div>
      </BrowserRouter>
    );
  }
}

export default MainPage;
