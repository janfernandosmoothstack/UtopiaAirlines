import React from 'react';
import './cancelReservation.css';
import { Link } from 'react-router-dom';
import { Form, Row, Col } from 'react-bootstrap';

const button = {
  backgroundColor: "#48A1A3",
  border: "none",
  color: "white",
  padding: "6px 10px",
  textAlign: "center",
  display: "inline-block",
  marginLeft: "550px",
  borderRadius: "5px",
  fontSize: "20px",
  marginTop: "30px",
  fontWeight: "bold"
};

const header = {
  textAlign: "center",
  fontSize: "40px",
  color: "white",
  marginBottom: "40px"
};

const labelStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: "120%",
}

const text = {
  //textAlign: "center",
  marginLeft: "450px",
  color: "white",
  fontSize: "20px"
}

const button1 = {
  backgroundColor: "#3C5E83",
  border: "none",
  color: "white",
  padding: "6px 10px",
  textAlign: "center",
  display: "inline-block",
  marginLeft: "550px",
  borderRadius: "5px",
  fontSize: "20px"
};

export const CancelReservation = () => {

  return (
    <section className="custom-form-container">
      <React.Fragment>
        <h2 style={header}>Cancel Booking</h2>

        <Form>
          <Row>
            <Col md={{ span: 3, offset: 2 }}>
              <Form.Group className="input">
                <Form.Label style={labelStyle}>Confirmation Number</Form.Label>
                <Form.Control name="reservationId" type="number"></Form.Control>
              </Form.Group>
            </Col>

            <Col md={{ span: 2 }}>
              <Form.Group>
              <button type="submit" style={button}>View Booking</button>
              </Form.Group>
            </Col>
          </Row>
        </Form>


          <Link to="/"><button type="submit" style={button}>Delete</button></Link>



      </React.Fragment>
    </section>
  );
}