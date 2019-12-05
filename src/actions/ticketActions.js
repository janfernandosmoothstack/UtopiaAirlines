import Dispatcher from '../dispatcher/appDispatcher'; //flux module
import axios from 'axios'; //make asynch calls

const TicketActions = {
    readTickets: function(flightFilter) {
        Dispatcher.dispatch({
            actionType: 'read_ticket_started'
        });

<<<<<<< HEAD
        axios.get(`https://qpyf4i2dz1.execute-api.us-east-2.amazonaws.com/dev/flights/from/${flightFilter.departureAirport}/to/${flightFilter.arrivalAirport}/on/${flightFilter.departureDate}`,flightFilter)
        .then(() => {
            Dispatcher.dispatch({
                actionType: 'read_ticket_successful',
                data: flightFilter
=======
        axios.get(`http://localhost:8000/flights/from/${flightFilter.departureAirport}/to/${flightFilter.arrivalAirport}/on/${flightFilter.departureDate}`)
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'read_ticket_successful',
                data: res.data
>>>>>>> fc7df326b7f522866c33d007a5c36ef1e87a3ed1
            });
        })
        .catch((error) => {
            console.log(error);
            
            Dispatcher.dispatch({
                actionType: 'read_ticket_failure'
            });
        });
    },

    createTicket: function(ticket) {
        Dispatcher.dispatch({
            actionType: 'create_ticket_started'
        });

<<<<<<< HEAD
        axios.post(`https://qpyf4i2dz1.execute-api.us-east-2.amazonaws.com/dev/reservations/${reservationId}/tickets`, ticket)
=======
        axios.post(`http://localhost:8000/reservations/${reservationId}/tickets`, ticket)
>>>>>>> fc7df326b7f522866c33d007a5c36ef1e87a3ed1
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'create_ticket_successful',
                data: ticket
            });
        })
        .catch((error) => {
            console.log(error);

            Dispatcher.dispatch({
                actionType: 'create_ticket_failure'
            });
        });
    }
}

export default TicketActions;
