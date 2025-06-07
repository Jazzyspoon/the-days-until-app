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
        <button
          className='accordion-toggle btn btn-sm btn-info'
          onClick={() => this.toggle()}
        >
          {this.state.isOpen ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.isOpen && (
          <div className='accordion-content'>
            {this.props.image && (
              <img
                src={this.props.image}
                alt={this.props.name}
                className='card-img'
                style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
              />
            )}
            {!this.props.image && (
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#f8f9fa',
                  border: '2px dashed #dee2e6',
                  borderRadius: '5px',
                  marginBottom: '10px',
                  textAlign: 'center',
                  color: '#6c757d'
                }}
              >
                No image available
              </div>
            )}
            <p>{this.props.description || 'No description available.'}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
