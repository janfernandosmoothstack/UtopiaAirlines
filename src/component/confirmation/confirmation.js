
import React from 'react';
import { Link } from 'react-router-dom';
import './confirmation.css';
import { Form, Row, Col } from 'react-bootstrap';
//#3C5E83
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

const subheader = {
    textAlign: "center",
    fontSize: "30px",
    color: "white",
    marginBottom: "40px",
    marginTop: "40px"
};

const labelStyle = {
    color: "white",
    fontWeight: "bold",
    fontSize: "120%",
}

/* Reservation Object       Ticket Object                   Traveler Object
    reservationId           flightNo - Flights              firstName
    userId                  departureAirport - Flights      lastName
    status                  arrivalAirport - Flights        phoneNumber
    itineraryId             departureTime - Flights         email
    totalTravelers          arrivalTime - Flights           address
                            departureDate - Itinerary
                            flightPrice - Ticket
                            totalTravelers
*/

export const Confirmation = (props) => {
    console.log("I am in confirmation");
    console.log("This the traveler record");
    console.log(props.traveler.travelerList);
    console.log("This is the reservation record");
    console.log(props.reservation.reservationList);
    console.log("this is the ticket record");
    console.log(props.ticket.ticketList);
    //_bookStore.book.bookList = _bookStore.book.bookList.filter(obj => obj.bookId != action.data); 

    //add method with history push to return to home page

    var arrivalAirport = props.airport.airportList.filter(obj => obj.airportCode == props.ticket.selectedTicket[0].arrivalAirport);
    var arrivalAirport = props.airport.airportList.filter(obj => obj.airportCode == props.ticket.selectedTicket[0].departureAirport);

    return (
        <section className="custom-form-container">
            <React.Fragment>
                <h2 style={header}>Booking Confirmation</h2>

                <Form>
                    <Form.Group>
                        <Col md={{ span: 2, offset: 5 }}>
                            <Form.Label style={labelStyle}>Confirmation Number: 1</Form.Label>
                        </Col>
                    </Form.Group>

                    <Form.Group>
                        <Col md={{ span: 2, offset: 5 }}>
                            <Form.Label style={labelStyle}>Flight Number: 1110</Form.Label>
                        </Col>
                    </Form.Group>

                    <Form.Group>
                        <Col md={{ span: 2, offset: 5 }}>
                            <Form.Label style={labelStyle}>Price: $150</Form.Label>
                        </Col>
                    </Form.Group>

                    <Row>
                        <Col md={{ span: 3, offset: 3 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>Departure Information</Form.Label>
                                <Form.Control style={labelStyle} plaintext readOnly defaultValue="Departure Date" />
                                <Form.Control style={labelStyle} plaintext readOnly defaultValue="Departure Time" />
                                <Form.Control style={labelStyle} plaintext readOnly defaultValue="Departure Airport" />
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 3, offset: 1 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>Arrival Information</Form.Label>
                                <Form.Control style={labelStyle} plaintext readOnly defaultValue="Arrival Date" />
                                <Form.Control style={labelStyle} plaintext readOnly defaultValue="Arrival Time" />
                                <Form.Control style={labelStyle} plaintext readOnly defaultValue="Arrival Airport" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>

                <h2 style={subheader}>Personal Information</h2>

                <Form>
                    <Row>
                        <Col md={{ span: 1, offset: 3 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>First Name</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 1 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>Janet</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 1, offset: 2 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>Phone Number</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 1 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>903333333</Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 1, offset: 3 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>Last Name</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 1 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>Fernando</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 1, offset: 2 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>E-Mail</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 1 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>janfernando@gmail.com</Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 1, offset: 3 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>Total Travelers</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 1 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>1</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 1, offset: 2 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>Address</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 3 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>4400 Oak Creek Ct, Fairfax, VA 22033</Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ offset: 2 }}>
                            <Form.Group>
                                <button type="button" style={button}>Return to Home Page</button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </React.Fragment>
        </section >
    );
}

{/* <Form>
  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext readOnly defaultValue="email@example.com" />
    </Col>
  </Form.Group> */}