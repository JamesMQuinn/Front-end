import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Reservations from './Components/Reservations';
import ReservationForm from './Components/ReservationForm';

class App extends Component {
  render() {
    return (
      <body>
        <ReservationForm />
        <Reservations />
      </body>
    );
  }
}

export default App;
