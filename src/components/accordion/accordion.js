//tooltip component
import { Component } from 'react';
import React from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      image: this.props.image,
      name: this.props.name,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className='accordion'>
        {this.state.isOpen && (
          <div className='accordion-content'>
            <img
              src={this.state.image}
              alt={this.state.name}
              className='card-img'
            />
            <p>{this.props.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
