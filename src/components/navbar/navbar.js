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

const Example = (props) => {
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
              <a href='#inputfield' className='addADay__link'>
                Add a Holiday
              </a>
            </Button>

            <NavItem>
              <NavLink href='#' className='left'>
                <h4>Log Out</h4>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
