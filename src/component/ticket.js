import React from 'react';
import {Form} from 'react-bootstrap';
import {Buy} from './buy';
import TicketActions from '../actions/ticketActions';
import PropTypes from 'prop-types';

const space = {
  marginLeft: "20px"
}

export class Ticket extends React.Component {
    
    createTicketRow(ticket) {
        return (
            <tr key = {ticket.flightNo}>
                <td> {ticket.flightNo} </td>
                <td> {ticket.departureDate} </td>
                <td> {ticket.departureTime} </td>
                <td> {ticket.arrivalTime} </td>
                <td> {ticket.departureAirport} </td>
                <td> {ticket.arrivalAirport} </td>
                <td> {ticket.flightPrice} </td>
                <td> <Buy></Buy> </td>
            </tr>
        );
    }

    componentDidMount() {
<<<<<<< HEAD
        // var flightFilter = {
        //     departureDate: '2019-12-12',
        //     departureAirport: 'LAX',
        //     arrivalAirport: 'IAH'
        // }

        //console.log(flightFilter)
        console.log(this.props.flight.flightFilter);

=======
>>>>>>> 28b1daec38e1b5987001a326ad9813d653373298
        TicketActions.readTickets(this.props.flight.flightFilter);
    }

    render(){  
        //{this.props.ticket.ticketList.map(this.createTicketRow, this)}
        let content = '';

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

        return(
            <React.Fragment>
                <Form style={space}>
                    <Form.Row>
                        <Form.Group controlId="departureAirport">
                            <Form.Label>From</Form.Label>
                            <Form.Control as="select">
                                <option>airport</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="arrivalAirport">
                            <Form.Label>To</Form.Label>
                            <Form.Control as="select">
                                <option>airport</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="departureDate">
                            <Form.Label>Departure Date</Form.Label>
                            <Form.Control type="date"></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="returnDate">
                            <Form.Label>Return Date</Form.Label>
                            <Form.Control type="date"></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="totalTravelers">
                            <Form.Label>Return Date</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>

                        {/* <div class="input-group-prepend">
                                
                                
                                
                               
                                <span class="input-group-text">Departure Date:  </span>
                                <input type="date" class="form-control" style = {space}/>  
                                <span class="input-group-text">Return Date: </span>
                                <input type="date" class="form-control" style = {space}/>  
                        
                            </div> */}
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
