//tooltip component
import { Component } from 'react';
import React from 'react';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
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
        <button
          type='button'
          className='btn btn-primary btn-sm btn-block'
          onClick={() => this.toggle()}
        >
          more info
        </button>
        {this.state.isOpen && (
          <>
            <div className='p-2'>{this.props.children}</div>
            <div className='accordion__image'>
              <img src={this.props.image} alt='' />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Accordion;
