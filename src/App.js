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
      isOpen: true,
      id: this.props.id,
      date: this.props.date,
      name: this.props.name,
      currentYear: new Date().getFullYear(),
    };
  }

  render() {
    return (
      <BrowserRouter>
        <AppHeader></AppHeader>
        <div className='App'>
          <main className='app--screen'>
            <header className='App-header'>
              <h1>The Days Left Until...</h1>
            </header>

            <div className='timegrid'>
              {this.state.HoliData.map((holiday) => {
                return (
                  <DateCardComponent
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
          ></InputField>
        </div>
      </BrowserRouter>
    );
  }
}

export default MainPage;
