import React from 'react';
import { Form } from 'react-bootstrap';
import {Buy} from './buy';
<<<<<<< HEAD
import TicketActions from '../actions/ticketActions.js';
=======
import TicketActions from '../actions/ticketActions';
>>>>>>> fc7df326b7f522866c33d007a5c36ef1e87a3ed1
import PropTypes from 'prop-types';

const space = {
  marginRight: "80px"
}

<<<<<<< HEAD
class Ticket extends React.Component {

=======
export class Ticket extends React.Component {
    
>>>>>>> fc7df326b7f522866c33d007a5c36ef1e87a3ed1
    createTicketRow(ticket) {
        return (
            <tr key = {ticket.flightNo}>
                <td> {ticket.flightNo} </td>
                <td> {ticket.departureDate} </td>
                <td> {ticket.departureTime} </td>
                <td> {ticket.arrivalTime} </td>
                <td> {ticket.departureAirport} </td>
                <td> {ticket.arrivalAirport} </td>
<<<<<<< HEAD
                <td> {ticket.price} </td>
=======
                <td> {ticket.flightPrice} </td>
>>>>>>> fc7df326b7f522866c33d007a5c36ef1e87a3ed1
                <td> <Buy></Buy> </td>
            </tr>
        );
    }

    componentDidMount() {
<<<<<<< HEAD
        TicketActions.readTickets();
    }

    render(){  
        
        let content = '';

=======
        // var flightFilter = {
        //     departureDate: '2019-12-12',
        //     departureAirport: 'LAX',
        //     arrivalAirport: 'IAH'
        // }

        //console.log(flightFilter)
        console.log(this.props.flight.flightFilter);

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

>>>>>>> fc7df326b7f522866c33d007a5c36ef1e87a3ed1
        return(
            <React.Fragment>
            <Form>
                
                <div class="input-group mb-3 input-group-sm">
                <div class="input-group-prepend">
                    
                    <span class="input-group-text" >From: </span>
                    <input type="text" class="form-control" style = {space}/> 
                    <span class="input-group-text">To: </span>
                    <input type="text" class="form-control" style = {space}/> 
                    <span class="input-group-text">Departure Date:  </span>
                    <input type="date" class="form-control" style = {space}/>  
                    <span class="input-group-text">Return Date: </span>
                    <input type="date" class="form-control" style = {space}/>  
            
                </div>
                </div>
            </Form>

            <div>
<<<<<<< HEAD
                <table class="table table-dark table-hover" >
                            <thead>
                                <tr>
                                    <th >FlightNo </th>
                                    <th>Depart Date</th>
                                    <th>Depart Time</th>
                                    <th>Arrival Date</th>
                                    <th>Arrival Time</th>
                                    <th>Departure Airport</th>\
                                    <th>Arrival Airport</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1008</td>
                                <td>2019-12-12</td>
                                <td>10:06 pm </td>
                                <td>2019-12-15</td>
                                <td>1:15 am </td>
                                <td>Los Angeles</td>
                                <td>Houston</td>
                                <td>$100</td>
                                <td><Buy> </Buy> </td>       
                            </tr>
                            {/* <tr>
                                <td>1549</td>
                                <td>08:06 pm </td>
                                <td>06:15 am </td>
                                <td>$100</td>
                                <td><Buy> </Buy> </td>
                            </tr>
                            <tr>
                                <td>1104</td>
                                <td>09:11 pm </td>
                                <td>11:19 am </td>
                                <td>$100</td>
                                <td><Buy> </Buy> </td>
                            </tr> */}
                            </tbody>    
                        </table>
=======
                {content}
>>>>>>> fc7df326b7f522866c33d007a5c36ef1e87a3ed1
            </div>
            </React.Fragment>
        );
    }
}

Ticket.propTypes = {
    ticket: PropTypes.object.isRequired
};
<<<<<<< HEAD

export default Ticket;
=======
>>>>>>> fc7df326b7f522866c33d007a5c36ef1e87a3ed1
