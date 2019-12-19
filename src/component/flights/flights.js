import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './flights.css';
import AirportActions from '../../actions/airportActions';

const style = {
  fontSize: "20px",
  color: "white",
  fontWeight: "bold"
};

const labelStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: "120%"
}

const button = {
  backgroundColor: "#48A1A3",
  border: "none",
  color: "white",
  padding: "6px 25px",
  display: "inline-block",
  marginLeft: "390px",
  borderRadius: "5px",
  fontSize: "20px",
  justifyContent: "center"
};

const header = {
  textAlign: "center",
  fontSize: "40px",
  color: "white",
  marginBottom: "18px"
};

export class Flights extends React.Component {

  createAirportOptions(airport) {
    const airportOpt = airport.city + ", " + airport.airportCode + " (" + airport.airportName + ")";

    return (
      <option key={airport.airportCode} value={airport.airportCode}>{airportOpt}</option>
    );
  }

  componentDidMount() {
    AirportActions.readAirports();
  }

  render() {
    let content = '';

    function disableTextBox() {
      var flightType = document.getElementById("oneWay");

      if (flightType.checked) {
        document.getElementById("returnDate").disabled = true;
      } else {
        document.getElementById("returnDate").disabled = false;
      }
    }

    const handleSubmit = (event) => {
      event.preventDefault();

      this.props.flight.flightFilter = {
        flightType: event.target.flightType.value,
        departureDate: event.target.departureDate.value,
        returnDate: event.target.returnDate.value,
        departureAirport: event.target.departureAirport.value,
        arrivalAirport: event.target.arrivalAirport.value,
        totalTravelers: event.target.totalTravelers.value
      }

      this.props.history.push('/tickets');
    }

    // if (this.props.airport.readState.success) {
    return (
      <section className="custom-form-container">
        <React.Fragment>
          <h2 style={header}>Book a Flight</h2>
          
            <Form onSubmit={handleSubmit}>

              <div class="form-group row" className="radio">
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" name="flightType" class="custom-control-input" value="roundTrip" id="roundTrip" onClick={disableTextBox} />
                  <label class="custom-control-label" htmlFor="roundTrip" style={style}>Round Trip</label>
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" name="flightType" class="custom-control-input" value="oneWay" id="oneWay" onClick={disableTextBox} />
                  <label class="custom-control-label" htmlFor="oneWay" style={style}>One-way</label>
                </div>
              </div>

              <Row>
                <Col md={{ span: 3, offset: 3 }}>
                  <Form.Group className="input">
                    <Form.Label htmlFor="fromLocation" style={labelStyle}>From</Form.Label>

                    <select id="fromLocation" class="form-control" name="departureAirport">
                      <option defaultValue>Departing from...</option>
                      {this.props.airport.airportList.map(this.createAirportOptions, this)}
                    </select>
                  </Form.Group>
                </Col>

                <Col md={{ span: 3 }}>
                  <Form.Group>
                    <Form.Label htmlFor="toLocation" style={labelStyle}>To</Form.Label>
                    <select id="toLocation" class="form-control" name="arrivalAirport">
                      <option defaultValue>Arriving at...</option>
                      {this.props.airport.airportList.map(this.createAirportOptions, this)}
                    </select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={{ span: 3, offset: 3 }}>
                  <Form.Group className="input">
                    <Form.Label htmlFor="departureDate" style={labelStyle}>Departure Date</Form.Label>
                    <Form.Control type="date" name="departureDate" />
                  </Form.Group>
                </Col>

                <Col md={{ span: 3 }}>
                  <Form.Group>
                    <Form.Label htmlFor="returning" style={labelStyle}>Return Date</Form.Label>
                    <Form.Control type="date" name="returnDate" id="returnDate"></Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={{ span: 2, offset: 3 }}>
                  <Form.Group>
                    <Form.Label htmlFor="totalTravelers" style={labelStyle}>Travelers</Form.Label>
                    <Form.Control type="number" id="totalTravelers" name="totalTravelers" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={{ offset: 3 }}>
                  <Form.Group>
                    <button type="submit" style={button}>Search</button>
                  </Form.Group>
                </Col>
              </Row>

            </Form>
        </React.Fragment>
      </section>
    );
  }
}

Flights.propTypes = {
  airport: PropTypes.object.isRequired,
  flight: PropTypes.object.isRequired
};

