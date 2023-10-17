import React, { useState } from 'react';
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

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='white' light expand='md'>
        <NavbarBrand href='/'>
          <h1>The Days Until App</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
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
};

export default NavbarComponent;
