
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
    // console.log("I am in confirmation");
    // console.log("This the traveler record");
    // console.log(props.traveler.travelerList);
    // console.log("This is the reservation record");
    // console.log(props.reservation.reservationList);
    // console.log("this is the ticket record");
    // console.log(props.ticket.selectedTicketList[0]);
    // console.log("this is the airports");
    // console.log(props.airport.airportList);
    
    //add method with history push to return to home page

    // Airport Object
    // airportCode
    // airportName
    // city
    // zipCode

    const arrivalAirport = props.airport.airportList.find(obj => obj.airportCode == props.ticket.selectedTicketList[0].arrivalAirport);
    const departureAirport = props.airport.airportList.find(obj => obj.airportCode == props.ticket.selectedTicketList[0].departureAirport);

    const arrivalString = arrivalAirport.city + ", " + arrivalAirport.airportCode + " (" + arrivalAirport.airportName + ")";
    const departureString = departureAirport.city + ", " + departureAirport.airportCode + " (" + departureAirport.airportName + ")";

    const price = props.reservation.reservationList[0].totalTravelers * props.ticket.selectedTicketList[0].flightPrice;

    return (
        <section className="custom-form-container">
            <React.Fragment>
                <h2 style={header}>Booking Confirmation</h2>

                <Form>
                    <Form.Group>
                        <Col md={{ span: 2, offset: 5 }}>
                            <Form.Label style={labelStyle}>Confirmation Number: {props.reservation.reservationList[0].reservationId}</Form.Label>
                        </Col>
                    </Form.Group>

                    <Form.Group>
                        <Col md={{ span: 2, offset: 5 }}>
                            <Form.Label style={labelStyle}>Flight Number: {props.ticket.selectedTicketList[0].flightNo}</Form.Label>
                        </Col>
                    </Form.Group>

                    <Form.Group>
                        <Col md={{ span: 2, offset: 5 }}>
                            <Form.Label style={labelStyle}>Price: ${price}</Form.Label>
                        </Col>
                    </Form.Group>

                    <Row>
                        <Col md={{ span: 4, offset: 2 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>Departure Information</Form.Label>
                                <Form.Control style={labelStyle} plaintext readOnly defaultValue={props.ticket.selectedTicketList[0].departureDate} />
                                <Form.Control style={labelStyle} plaintext readOnly defaultValue={props.ticket.selectedTicketList[0].departureTime} />
                                <Form.Control style={labelStyle} plaintext readOnly defaultValue={departureString} />
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 4, offset: 1 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>Arrival Information</Form.Label>
                                <Form.Control style={labelStyle} plaintext readOnly defaultValue={props.ticket.selectedTicketList[0].departureDate} />
                                <Form.Control style={labelStyle} plaintext readOnly defaultValue={props.ticket.selectedTicketList[0].arrivalTime} />
                                <Form.Control style={labelStyle} plaintext readOnly defaultValue={arrivalString} />
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
                                <Form.Label style={labelStyle}>{props.traveler.travelerList[0].firstName}</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 1, offset: 2 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>Phone Number</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 1 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>{props.traveler.travelerList[0].phoneNumber}</Form.Label>
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
                                <Form.Label style={labelStyle}>{props.traveler.travelerList[0].lastName}</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 1, offset: 2 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>E-Mail</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 1 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>{props.traveler.travelerList[0].email}</Form.Label>
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
                                <Form.Label style={labelStyle}>{props.reservation.reservationList[0].totalTravelers}</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 1, offset: 2 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>Address</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col md={{ span: 3 }}>
                            <Form.Group>
                                <Form.Label style={labelStyle}>{props.traveler.travelerList[0].address}</Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ offset: 2 }}>
                            <Form.Group>
                                <Link to='/'><button type="submit" style={button}>Return to Home Page</button></Link>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </React.Fragment>
        </section >
    );
}