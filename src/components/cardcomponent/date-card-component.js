import React, { Component } from 'react';
import Countdown from 'react-countdown';

let completed = <div>"It's here!!!!"</div>;

const renderer = ({ days, hours, minutes }) => {
  if (Date === new Date(0, 0, 0)) return completed;
  else
    return (
      <div className='timer container d-flex '>
        Only {days} Days, {hours} Hours, and {minutes} Minutes
      </div>
    );
};

class DateCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      date: this.props.date,
      name: this.props.name,
      isOpen: true,
      renderer: renderer,
    };
  }
  //each card gets it's own unique light color
  getColor() {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }

  //if the color created in getColor() is a dark color, make the text white in that card
  getTextColor() {
    let color = this.getColor();
    if (color.substring(0, 2) > '80') {
      return 'white';
    } else {
      return 'black';
    }
  }

  render() {
    return (
      <div
        className='buttonBox'
        style={{ backgroundColor: this.getColor() }}
        alt={this.state.name}
      >
        <div className='card-body'>
          <div className='card-text'>
            <Countdown
              date={new Date(this.state.date)}
              renderer={this.state.renderer}
            />
          </div>
          <h3 className='card-title'>Until {this.state.name}!!!</h3>
        </div>
      </div>
    );
  }
}
export default DateCardComponent;
