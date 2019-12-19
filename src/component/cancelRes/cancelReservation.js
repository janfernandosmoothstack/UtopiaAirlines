import React from 'react';
import './cancelReservation.css';
import { Link } from 'react-router-dom';
import { Form, Row, Col } from 'react-bootstrap';
import ReservationActions from '../../actions/reservationActions';
import { render } from 'react-dom';

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

export class CancelReservation extends React.Component {
  //let content = '';


  airportFormat(){
    const arrivalAirport = props.airport.airportList.find(obj => obj.airportCode == props.flight.flightList[0].arrivalAirport);
    const departureAirport = props.airport.airportList.find(obj => obj.airportCode == props.flight.flightList[0].departureAirport);

    console.log("this is arrival airport object")
    console.log(arrivalAirport);

    console.log("this is the dep air obj")
    console.log(departureAirport);

    const arrivalString = arrivalAirport.city + ", " + arrivalAirport.airportCode + " (" + arrivalAirport.airportName + ")";
    const departureString = departureAirport.city + ", " + departureAirport.airportCode + " (" + departureAirport.airportName + ")";

    console.log("this is the dep string")
    console.log(departureString)

    console.log("this is the arrival string")
    console.log(arrivalString)
  }



  // content = (
  //   <Form>
  //     <Form.Group>
  //       <Col md={{ span: 2, offset: 5 }}>
  //         <Form.Label style={labelStyle}>Confirmation Number: {props.reservation.reservationList[0].reservationId}</Form.Label>
  //       </Col>
  //     </Form.Group>

  //     <Form.Group>
  //       <Col md={{ span: 2, offset: 5 }}>
  //         <Form.Label style={labelStyle}>Flight Number: {props.ticket.selectedTicketList[0].flightNo}</Form.Label>
  //       </Col>
  //     </Form.Group>

  //     <Row>
  //       <Col md={{ span: 4, offset: 2 }}>
  //         <Form.Group>
  //           <Form.Label style={labelStyle}>Departure Information</Form.Label>
  //           <Form.Control style={labelStyle} plaintext readOnly defaultValue={props.ticket.selectedTicketList[0].departureDate} />
  //           <Form.Control style={labelStyle} plaintext readOnly defaultValue={props.ticket.selectedTicketList[0].departureTime} />
  //           <Form.Control style={labelStyle} plaintext readOnly defaultValue={departureString} />
  //         </Form.Group>
  //       </Col>

  //       <Col md={{ span: 4, offset: 1 }}>
  //         <Form.Group>
  //           <Form.Label style={labelStyle}>Arrival Information</Form.Label>
  //           <Form.Control style={labelStyle} plaintext readOnly defaultValue={props.ticket.selectedTicketList[0].departureDate} />
  //           <Form.Control style={labelStyle} plaintext readOnly defaultValue={props.ticket.selectedTicketList[0].arrivalTime} />
  //           <Form.Control style={labelStyle} plaintext readOnly defaultValue={arrivalString} />
  //         </Form.Group>
  //       </Col>
  //     </Row>
  //   </Form>
  // );

  render() {

    const handleSubmit = (event) => {
      event.preventDefault();

      ReservationActions.readReservation(event.target.reservationId.value);

      airportFormat();
    };

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

          {/* <Link to="/"><button type="submit" style={button}>Delete</button></Link> */}
        </React.Fragment>
      </section>
    );
  }
}