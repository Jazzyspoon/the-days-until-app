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
      <div>
        <Navbar color='white' light expand='md'>
          <NavbarBrand href='/'>
            <h1>The Days Until App</h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto spacemaker left'>
              <Button className='btn btn-success btn-custom-lg'>
                <a href='#inputfield' className='addAday__link'>
                  Add a Holiday
                </a>
              </Button>

              <NavItem>
                <NavLink href='#' className='left'></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
