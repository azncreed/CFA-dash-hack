import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClientCount from './ClientCount';
import BookingsIndexComp from './BookingsIndexComp';
import { Card, Button, CardTitle, CardText, Row, Col, ModalHeader } from 'reactstrap';
import NavBarComponent from './NavBarComponent';
import HeaderComponent from './HeaderComponent.js';

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
        <NavBarComponent />
        <HeaderComponent />
         


        <Row>
        <Col sm="6">
          <Card block className="clients">
            <CardTitle>Number of Clients</CardTitle>
             <CardText>
              <ClientCount clients={this.state.clients} />
             </CardText>
        </Card>
       </Col>

        <Col sm="6">
         <Card block className="booking-history">
          <CardTitle>Booking History</CardTitle>
           <CardText>
           <BookingsIndexComp bookings={this.state.bookings} />
           </CardText>
         </Card>
        </Col>
        </Row>

        <Row>
        </Row>
      </div>
       
    );
  }
}

export default App;
