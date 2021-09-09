import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "../Buttons/CustomButtonComponent.tsx";
const AppHeader = () => {
  return (
    <header className="app--header">
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="primary" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <NavLink to="#" variant="h2">
            <Button
              backgroundColor="blue"
              fontSize="20px"
              borderColor="white"
              borderWidth="6px"
              onClick={() => console.log("add a holiday")}
              radius="5%"
              children="add a holiday"
              margin="10px"
              color="white"
            >
              The Days Until App
            </Button>
          </NavLink>
          <NavLink to="/screen-one">
            <Button
              backgroundColor="blue"
              fontSize="18px"
              borderColor="white"
              borderWidth="6px"
              onClick={() => console.log("add a holiday")}
              radius="5%"
              children="add a holiday"
              margin="10px"
              color="white"
            >
              Add a Holiday
            </Button>
          </NavLink>
          <NavLink to="/screen-two">
            <Button
              backgroundColor="blue"
              fontSize="18px"
              borderColor="white"
              borderWidth="6px"
              onClick={() => console.log("add a birthday!")}
              radius="5%"
              children="Add a Birthday"
              margin="10px"
              color="white"
            >
              Add a Birthday
            </Button>
          </NavLink>
          <NavLink to="/screen-two">
            <Button
              backgroundColor="blue"
              fontSize="18px"
              borderColor="white"
              borderWidth="6px"
              onClick={() => console.log("Log Out")}
              radius="5%"
              children="Add a Birthday"
              margin="10px"
              color="white"
            >
              Log Out
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default AppHeader;
