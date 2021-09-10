import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./App";
import reportWebVitals from "./reportWebVitals";
import { Container } from "reactstrap";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
class TheDaysUntilApp extends React.Component {
  render() {
    return (
      <Container>
        <MainPage />
      </Container>
    );
  }
}
const container = document.getElementsByClassName("app-container")[0];

ReactDOM.render(React.createElement(TheDaysUntilApp), container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
