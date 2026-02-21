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
      <div className='accordion mt-auto pt-3'>
        <button
          className={`btn btn-sm w-100 ${this.state.isOpen ? 'btn-outline-secondary' : 'btn-outline-primary'}`}
          onClick={() => this.toggle()}
        >
          {this.state.isOpen ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.isOpen && (
          <div className='accordion-content mt-3 p-3 bg-light rounded shadow-sm'>
            {this.props.image && (
              <img
                src={this.props.image}
                alt={this.props.name}
                className='img-fluid rounded mb-3'
                style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }}
              />
            )}
            {!this.props.image && (
              <div
                className='d-flex align-items-center justify-content-center bg-white border border-dashed rounded mb-3'
                style={{ height: '100px', color: '#6c757d', borderStyle: 'dashed' }}
              >
                No image available
              </div>
            )}
            <p className='small mb-0 text-dark'>{this.props.description || 'No description available.'}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
