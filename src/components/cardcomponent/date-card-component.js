import React, { Component } from 'react';
import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes }) => {
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
      currentYear: new Date().getFullYear(),
    };
  }
  //each card gets it's own unique light color
  getColor() {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return this.lightenColor(color, 35);
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

  lightenColor(color, percent) {
    var num = parseInt(color.replace('#', ''), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      B = ((num >> 8) & 0x00ff) + amt,
      G = (num & 0x0000ff) + amt;
    return (
      '#' +
      (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
        (G < 255 ? (G < 1 ? 0 : G) : 255)
      )
        .toString(16)
        .slice(1)
    );
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
