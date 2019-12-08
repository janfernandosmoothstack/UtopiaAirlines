import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import '../payment/payment.css';
import { Payment } from '../payment/payment.js';
import './traveler.css'

const header = {
  textAlign: "center",
  fontSize: "40px",
  color: "white",
  marginBottom: "40px"
};

const labelStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: "120%"
}

export class Traveler extends React.Component {

  componentDidMount() {
    console.log("I am in Traveler");
    console.log(this.props.ticket.selectedTicketList);
  }

  render() {
    return (
      <section class="custom-form-container">
        <React.Fragment>
          <h1 style={header}>Traveler Information</h1>

          <Form>
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
                  <Payment></Payment>
                </Form.Group>
              </Col>
            </Row>

          </Form>
        </React.Fragment>
      </section>
    );
  }
}