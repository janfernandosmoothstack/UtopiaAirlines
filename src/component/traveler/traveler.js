import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import '../payment/payment.css';
import { Payment } from '../payment/payment.js';
import './traveler.css';
import ReservationActions from '../../actions/reservationActions';

const header = {
  textAlign: "center",
  fontSize: "40px",
  color: "white",
  marginBottom: "40px"
};

const subheader = {
  textAlign: "center",
  fontSize: "25px",
  color: "white",
  marginBottom: "40px"
};

const labelStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: "120%"
}

export class Traveler extends React.Component {

  // componentDidMount() {
  //   console.log("I am in Traveler");
  //   console.log(this.props.ticket.selectedTicketList);
  // }

  createTravelerForm(travelerNo) {
    // ticket.departureDate = ticket.departureDate.substring(0, ticket.departureDate.length - 14) + " (YYYY-MM-DD)";

    return (

      <Form onSubmit={handleSubmit}>
        
        <h1 style={subheader}>Traveler {travelerNo}</h1>

            <Row>
              <Col md={{ span: 3, offset: 3 }}>
                <Form.Group className="input">
                  <Form.Label style={labelStyle}>First Name</Form.Label>
                  <Form.Control name="firstName" type="text"></Form.Control>
                </Form.Group>
              </Col>

              <Col md={{ span: 3 }}>
                <Form.Group>
                  <Form.Label style={labelStyle}>Last Name</Form.Label>
                  <Form.Control name="lastName" type="text"></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={{ span: 3, offset: 3 }}>
                <Form.Group className="input">
                  <Form.Label style={labelStyle}>Phone Number</Form.Label>
                  <Form.Control name="phoneNumber" type="text"></Form.Control>
                </Form.Group>
              </Col>

              <Col md={{ span: 3 }}>
                <Form.Group>
                  <Form.Label style={labelStyle}>E-Mail</Form.Label>
                  <Form.Control name="email" type="email"></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Form.Group>
                  <Form.Label style={labelStyle}>Address</Form.Label>
                  <Form.Control name="address" type="text"></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={{ offset: 2 }}>
                <Form.Group>
                  <Payment history={this.props.history}></Payment>
                </Form.Group>
              </Col>
            </Row>

          </Form>
    );
  }

  render() {
    const handleSubmit = (event) => {
      event.preventDefault();

      var traveler = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        phoneNumber: event.target.phoneNumber.value,
        email: event.target.email.value,
        address: event.target.address.value
      }

      var ticket = this.props.ticket.selectedTicketList[0];
      ticket.totalTravelers = this.props.flight.flightFilter.totalTravelers;

      ReservationActions.createReservation(traveler, ticket);
    }

    return (
      <section className="custom-form-container">
        <React.Fragment>
          <h1 style={header}>Traveler Information</h1>

          <Form onSubmit={handleSubmit}>
            <h1 style={subheader}>Traveler 1</h1>

            <Row>
              <Col md={{ span: 3, offset: 3 }}>
                <Form.Group className="input">
                  <Form.Label style={labelStyle}>First Name</Form.Label>
                  <Form.Control name="firstName" type="text"></Form.Control>
                </Form.Group>
              </Col>

              <Col md={{ span: 3 }}>
                <Form.Group>
                  <Form.Label style={labelStyle}>Last Name</Form.Label>
                  <Form.Control name="lastName" type="text"></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={{ span: 3, offset: 3 }}>
                <Form.Group className="input">
                  <Form.Label style={labelStyle}>Phone Number</Form.Label>
                  <Form.Control name="phoneNumber" type="text"></Form.Control>
                </Form.Group>
              </Col>

              <Col md={{ span: 3 }}>
                <Form.Group>
                  <Form.Label style={labelStyle}>E-Mail</Form.Label>
                  <Form.Control name="email" type="email"></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Form.Group>
                  <Form.Label style={labelStyle}>Address</Form.Label>
                  <Form.Control name="address" type="text"></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={{ offset: 2 }}>
                <Form.Group>
                  <Payment history={this.props.history}></Payment>
                </Form.Group>
              </Col>
            </Row>

          </Form>
        </React.Fragment>
      </section >
    );
  }
}