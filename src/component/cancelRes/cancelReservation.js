import React from 'react';
import './cancelReservation.css';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Spinner } from 'react-bootstrap';
import ReservationActions from '../../actions/reservationActions';
import TicketStore from '../../store/ticketStore';
import ItineraryStore from '../../store/itineraryStore';
import FlightStore from '../../store/flightStore';
import AirportStore from '../../store/airportStore';

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
  whiteSpace: "nowrap"
}

const button1 = {
  backgroundColor: "#48A1A3",
  border: "none",
  color: "white",
  padding: "6px 20px 8px 20px",
  textAlign: "center",
  display: "inline-block",
  borderRadius: "5px",
  whiteSpace: "nowrap",
  fontWeight: "bold",
  marginTop: "35px",
  fontSize: "18px"
};

// ticketList
// ticketId: 1
// reservationId: 1
// flightPrice: 150
// itineraryId: 1

// itineraryList
// flightNo: 1110
// availableSeats: 83
// departureDate: "2019-12-12T00:00:00.000Z"
// itineraryId: 1

// flightList
// flightNo: 1110
// totalSeats: 100
// departureAirport: "LAX"
// arrivalAirport: "IAH"
// departureTime: "12:30:00"
// arrivalTime: "15:30:00"

// airportList
// airportName: "George Bush Intercontinental Airport"
// city: "Houston"
// zipCode: "77584"
// airportCode: "IAH"

// airportName: "Los Angeles International Airport"
// city: "Los Angeles"
// zipCode: "99093"
// airportCode: "LAX"

export const CancelReservation = (props) => {

  let content = '';

  const handleSubmit = (event) => {
    event.preventDefault();

    TicketStore.resetReadState();
    ItineraryStore.resetReadState();
    FlightStore.resetReadState();
    AirportStore.resetReadState();

    ReservationActions.readReservation(event.target.reservationId.value);
  };

  if (props.ticket.readState.success && props.itinerary.readState.success &&
    props.flight.readState.success && props.airport.readState.success) {



    //formar data into presentable format
    let arrivalAirport = props.airport.airportList.find(obj => obj.airportCode == props.flight.flightList[0].arrivalAirport);
    let departureAirport = props.airport.airportList.find(obj => obj.airportCode == props.flight.flightList[0].departureAirport);

    let arrivalString = arrivalAirport.city + ", " + arrivalAirport.airportCode + " (" + arrivalAirport.airportName + ")";
    let departureString = departureAirport.city + ", " + departureAirport.airportCode + " (" + departureAirport.airportName + ")";

    props.itinerary.itineraryList[0].departureDate = props.itinerary.itineraryList[0].departureDate.substring(0, props.itinerary.itineraryList[0].departureDate.length - 14) + " (YYYY-MM-DD)";

    content = (
      <Form>
        <Form.Group>
          <Col md={{ span: 2, offset: 5 }}>
            <Form.Label style={labelStyle}>Confirmation Number: {props.ticket.ticketList[0].reservationId}</Form.Label>
          </Col>
        </Form.Group>

        <Form.Group>
          <Col md={{ span: 2, offset: 5 }}>
            <Form.Label style={labelStyle}>Flight Number: {props.flight.flightList[0].flightNo}</Form.Label>
          </Col>
        </Form.Group>

        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <Form.Group>
              <Form.Label style={labelStyle}>Departure Information</Form.Label>
              <Form.Control style={labelStyle} plaintext readOnly defaultValue={props.itinerary.itineraryList[0].departureDate} />
              <Form.Control style={labelStyle} plaintext readOnly defaultValue={props.flight.flightList[0].departureTime} />
              <Form.Control style={labelStyle} plaintext readOnly defaultValue={departureString} />
            </Form.Group>
          </Col>

          <Col md={{ span: 4, offset: 1 }}>
            <Form.Group>
              <Form.Label style={labelStyle}>Arrival Information</Form.Label>
              <Form.Control style={labelStyle} plaintext readOnly defaultValue={props.itinerary.itineraryList[0].departureDate} />
              <Form.Control style={labelStyle} plaintext readOnly defaultValue={props.flight.flightList[0].arrivalTime} />
              <Form.Control style={labelStyle} plaintext readOnly defaultValue={arrivalString} />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={{ offset: 2 }}>
            <Link to="/"><button type="submit" style={button}>Delete</button></Link>
          </Col>
        </Row>
      </Form>
    );

    return (
      <section className="custom-form-container">
        <React.Fragment>
          <h2 style={header}>Cancel Booking</h2>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={{ span: 3, offset: 4 }}>
                <Form.Group className="input">
                  <Form.Label style={labelStyle}>Confirmation Number</Form.Label>
                  <Form.Control name="reservationId" type="number" defaultValue={props.ticket.ticketList[0].reservationId} ></Form.Control>
                </Form.Group>
              </Col>

              <Col md={{ span: 1 }}>
                <Form.Group>
                  <button type="submit" style={button1}>View Booking</button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <br></br>

          {content}
        </React.Fragment>
      </section>
    );

  } else if (props.reservation.readState.pending) {

    content = (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="light" />
      </div>
    );

    return (
      <section className="custom-form-container">
        <React.Fragment>
          <h2 style={header}>Cancel Booking</h2>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={{ span: 3, offset: 4 }}>
                <Form.Group className="input">
                  <Form.Label style={labelStyle}>Confirmation Number</Form.Label>
                  <Form.Control name="reservationId" type="number" ></Form.Control>
                </Form.Group>
              </Col>

              <Col md={{ span: 1 }}>
                <Form.Group>
                  <button type="submit" style={button1}>View Booking</button>
                </Form.Group>
              </Col>
            </Row>
          </Form>

          {content}
        </React.Fragment>
      </section>
    );

  } else if (props.ticket.readState.failure || props.itinerary.readState.failure ||
    props.flight.readState.failure || props.airport.readState.failure) {

    content = (
      <div className="alert alert-danger" role="alert">
        Record does not exist.
      </div>
    );

    return (
      <section className="custom-form-container">
        <React.Fragment>
          <h2 style={header}>Cancel Booking</h2>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={{ span: 3, offset: 4 }}>
                <Form.Group className="input">
                  <Form.Label style={labelStyle}>Confirmation Number</Form.Label>
                  <Form.Control name="reservationId" type="number" ></Form.Control>
                </Form.Group>
              </Col>

              <Col md={{ span: 1 }}>
                <Form.Group>
                  <button type="submit" style={button1}>View Booking</button>
                </Form.Group>
              </Col>
            </Row>
          </Form>

          {content}
        </React.Fragment>
      </section>
    );

  } else {

    return (
      <section className="custom-form-container">
        <React.Fragment>
          <h2 style={header}>Cancel Booking</h2>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={{ span: 3, offset: 4 }}>
                <Form.Group className="input">
                  <Form.Label style={labelStyle}>Confirmation Number</Form.Label>
                  <Form.Control name="reservationId" type="number" ></Form.Control>
                </Form.Group>
              </Col>

              <Col md={{ span: 1 }}>
                <Form.Group>
                  <button type="submit" style={button1}>View Booking</button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </React.Fragment>
      </section>
    );
  }
}