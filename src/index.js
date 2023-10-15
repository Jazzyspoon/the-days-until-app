import React from 'react';
import { createRoot } from 'react-dom/client';
import MainPage from './App';
import reportWebVitals from './reportWebVitals';
import { Container } from 'reactstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
class TheDaysUntilApp extends React.Component {
  render() {
    return (
      <Container>
        <MainPage />
      </Container>
    );
  }
}

const container = document.getElementById('app-container');
const root = createRoot(container);
root.render(<TheDaysUntilApp />);

reportWebVitals();
