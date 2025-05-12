import './App.css';
import React from 'react';
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
      isOpen: false,
    };
  }

  toggle = (id) => {
    return () => {
      const HoliData = this.state.HoliData.map((holiday) => {
        if (holiday.id === id) {
          holiday.isOpen = !holiday.isOpen;
        }
        return holiday;
      });
      this.setState({ HoliData });
    };
  };

  //reload the state of the cards
  reloadCards = () => {
    this.setState({ HoliData: HoliData });
  };

  render() {
    return (
      <BrowserRouter>
        <AppHeader></AppHeader>
        <div className='App'>
          <main className='app--screen'>
            <header className='App-header'>
              <h1>The Days Left Until...</h1>
            </header>

            <div className='time-grid'>
              {this.state.HoliData.map((holiday) => {
                return (
                  <DateCardComponent
                    onClick={this.toggle(holiday.id)}
                    key={holiday.id}
                    id={holiday.id}
                    date={holiday.date}
                    name={holiday.name}
                    description={holiday.description}
                    image={holiday.image}
                  />
                );
              })}
            </div>
          </main>
          <InputField
            HoliData={this.state.HoliData}
            isOpen={this.state.isOpen}
            reloadCards={this.reloadCards}
          ></InputField>
        </div>
      </BrowserRouter>
    );
  }
}

export default MainPage;
