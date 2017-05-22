import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClientCount from './ClientCount';
import BookingsIndexComp from './BookingsIndexComp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [1,2,3,4],
      bookings: [1,2,3]
    }
  };




  render() {
    return (
      <div>
        <h1>Personal Dashboard</h1>

       <ClientCount clients={this.state.clients} />

       <BookingsIndexComp bookings={this.state.bookings} />
       
      </div>
    );
  }
}

export default App;
