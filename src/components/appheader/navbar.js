import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import './navbar.css';

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className='container'>
        <Navbar color='transparent' light expand='md' className='navbar'>
          <NavbarBrand href='/'>
            <h1>The Days Until...</h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ms-auto align-items-center' navbar>
              <NavItem>
                <Button color='success' className='btn-custom-lg'>
                  <a href='#inputfield' className='addAday__link'>
                    <span style={{ fontSize: '1.2rem' }}>+</span> Add a Holiday
                  </a>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
