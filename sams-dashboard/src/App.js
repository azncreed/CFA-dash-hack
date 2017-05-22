import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClientCount from './ClientCount';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [1,2,3]
    }
  };




  render() {
    return (
      <div>
       <ClientCount clients={this.state.clients} />
       
      </div>
    );
  }
}

export default App;
