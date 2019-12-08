import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './flights.css';
import FlightActions from '../../actions/flightActions';

const style = {
  fontSize: "20px",
  color: "white",
  fontWeight: "bold"
};

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
  marginLeft: "18px",
  fontSize: "40px",
  color: "white"
};

export class Flights extends React.Component {

  createAirportOptions(airport) {
    const airportOpt = airport.city + ", " + airport.airportCode + " (" + airport.airportName + ")";

    return (
      <option key={airport.airportCode} value={airport.airportCode}>{airportOpt}</option>
    );
  }

  componentDidMount() {
    FlightActions.readAirports();
  }

  render() {
    let content = '';

    disableTextBox = () => {
      var flightType = document.getElementById("oneWay");
      
      if(flightType.checked) {
        document.getElementById("returnDate").disabled = true;
      }else {
        document.getElementById("returnDate").disabled = false;
      }
    }

    ticketPage = () => {
      window.location.href = "http://localhost:3000/#/tickets";
    };

    const handleSubmit = (event) =>{
      event.preventDefault();
   
      this.props.flight.flightFilter = {
        flightType: event.target.flightType.value,
        departureDate: event.target.departureDate.value,
        returnDate: event.target.returnDate.value,
        departureAirport: event.target.departureAirport.value,
        arrivalAirport: event.target.arrivalAirport.value,
        totalTravelers: event.target.totalTravelers.value
      }
    }

   // if (this.props.airport.readState.success) {

      content = (
        <section class="custom-form-container">

          <h2 style={header}>Book a Flight</h2>

          <br></br>

          <div className="formCenter">
            <Form onSubmit={handleSubmit}>

              <div class="form-group row" className="radio">
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" name="flightType" class="custom-control-input" value="roundTrip" id="roundTrip" onClick={disableTextBox} />
                  <label class="custom-control-label" htmlFor="roundTrip" style={style}>Round Trip</label>
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" name="flightType" class="custom-control-input" value="oneWay" id="oneWay" onClick={disableTextBox}/>
                  <label class="custom-control-label" htmlFor="oneWay" style={style}>One-way</label>
                </div>
              </div>

              <br></br>

              <div class="form-group row">
                <label htmlFor="departureDate" class="col-2 col-form-label" style={style}>Departing</label>
                <div class="col-3">
                  <input class="form-control" type="date" name="departureDate" />
                </div>
               
                <label htmlFor="returning" class="col-2 col-form-label" style={style}>Returning</label>
                <div class="col-3">
                  <input class="form-control" type="date" name="returnDate" id="returnDate" />
                </div>
              </div>

              <br></br>

              <div class="form-group row">
                <label htmlFor="fromLocation" class="col-2 col-form-label" style={style}>Flying From</label>
                <div class="col-3">
                  <select id="fromLocation" class="form-control" name="departureAirport">
                    <option defaultValue>Departing from...</option>
                    {this.props.airport.airportList.map(this.createAirportOptions, this)}
                  </select>
                </div>

                <label htmlFor="toLocation" class="col-2 col-form-label" style={style}>Flying To</label>
                <div class="col-3">
                  <select id="toLocation" class="form-control" name="arrivalAirport">
                    <option defaultValue>Arriving at...</option>
                    {this.props.airport.airportList.map(this.createAirportOptions, this)}
                  </select>
                </div>
              </div>

              <br></br>

              <div class="form-group row">
                <label htmlFor="totalTravelers" class="col-2 col-form-label" style={style}>Travelers</label>
                <div class="col-2">
                  <input class="form-control" type="number" id="totalTravelers" name="totalTravelers" />
                </div>
              </div>

              <div class="form-group row" className="parentCenter">
                <div className="childCenter">
                  <button onClick={ticketPage} type="submit" style={button}>Search</button>
                </div>
              </div>

            </Form>
          </div>
        </section>
      );

      return (
        <React.Fragment>
          {content}
        </React.Fragment>
      );
    //}
  }
}

Flights.propTypes = {
  airport: PropTypes.object.isRequired,
  flight: PropTypes.object.isRequired
};

