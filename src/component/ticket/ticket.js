import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { Buy } from './buy';
import TicketActions from '../../actions/ticketActions';
import AirportActions from '../../actions/airportActions';
import PropTypes from 'prop-types';
import './ticket.css';

const space = {
    marginLeft: "20px",
    marginBottom: "30px"
}

const labelStyle = {
    color: "white",
    fontWeight: "bold",
    fontSize: "120%"
}

export class Ticket extends React.Component {

    createTicketRow(ticket) {
        ticket.departureDate = ticket.departureDate.substring(0, ticket.departureDate.length-14) + " (YYYY-MM-DD)";
        
        return (
            <tr key={ticket.flightNo}>
                <td> {ticket.flightNo} </td>
                <td> {ticket.departureDate} </td>
                <td> {ticket.departureTime} </td>
                <td> {ticket.arrivalTime} </td>
                <td> {ticket.departureAirport} </td>
                <td> {ticket.arrivalAirport} </td>
                <td> {ticket.flightPrice} </td>
                <td> <Buy ticket={ticket} selectedTicketList={this.props.ticket.selectedTicketList} history={this.props.history}></Buy> </td>
            </tr>
        );
    }

    createAirportOptions(airport) {
        const airportOpt = airport.city + ", " + airport.airportCode + " (" + airport.airportName + ")";

        return (
            <option key={airport.airportCode} value={airport.airportCode}>{airportOpt}</option>
        );
    }

    componentDidMount() {
        TicketActions.readTickets(this.props.flight.flightFilter);
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

            TicketActions.readTickets(this.props.flight.flightFilter);
        }

        content = (
            <table class="table table-dark table-hover" >
                <thead>
                    <tr>
                        <th>Flight No.</th>
                        <th>Departure Date</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Departure Airport</th>
                        <th>Arrival Airport</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.ticket.ticketList.map(this.createTicketRow, this)}
                </tbody>
            </table>
        );

        return (
            <React.Fragment>
                <Form onSubmit={handleSubmit} style={space}>
                    <Form.Row>

                        <Form.Group className="input">
                            <Form.Label style={labelStyle}>From</Form.Label>
                            
                            <Form.Control name="departureAirport" as="select">
                                <option defaultValue>{this.props.flight.flightFilter.departureAirport}</option>
                                {this.props.airport.airportList.map(this.createAirportOptions, this)}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="input">
                            <Form.Label style={labelStyle}>To</Form.Label>
                            
                            <Form.Control name="arrivalAirport" as="select">
                                <option defaultValue>{this.props.flight.flightFilter.arrivalAirport}</option>
                                {this.props.airport.airportList.map(this.createAirportOptions, this)}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="input">
                            <Form.Label style={labelStyle}>Departure Date</Form.Label>
                            <Form.Control name="departureDate" type="date" defaultValue={this.props.flight.flightFilter.departureDate}></Form.Control>
                        </Form.Group>

                        <Form.Group className="input">
                            <Form.Label style={labelStyle}>Return Date</Form.Label>
                            <Form.Control id="returnDate" name="returnDate" type="date" defaultValue={this.props.flight.flightFilter.returnDate}></Form.Control>
                        </Form.Group>

                        <Form.Group className="input">
                            <Form.Label style={labelStyle}>Travelers</Form.Label>
                            <Form.Control name="totalTravelers" type="number" defaultValue={this.props.flight.flightFilter.totalTravelers}></Form.Control>
                        </Form.Group>

                        <Form.Group className="radioStyle">
                            <Col sm={10}>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" name="flightType" class="custom-control-input" value="roundTrip" id="roundTrip" onClick={disableTextBox} />
                                    <label class="custom-control-label" htmlFor="roundTrip" style={labelStyle}>Round Trip</label>
                                </div>

                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" name="flightType" class="custom-control-input" value="oneWay" id="oneWay" onClick={disableTextBox} />
                                    <label class="custom-control-label" htmlFor="oneWay" style={labelStyle}>One-way</label>
                                </div>
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <button className="buttonStyle" type="submit">Search</button>
                        </Form.Group>

                    </Form.Row>
                </Form>

                <div>
                    {content}
                </div>
            </React.Fragment>
        );
    }
}

Ticket.propTypes = {
    ticket: PropTypes.object.isRequired
};
