import Dispatcher from '../dispatcher/appDispatcher'; //flux module
import axios from 'axios'; //make asynch calls

const TicketActions = {
    readTickets: function(flightFilter) {
        Dispatcher.dispatch({
            actionType: 'read_ticket_started'
        });

        axios.get(`http://localhost:8000/flights/from/${flightFilter.departureAirport}/to/${flightFilter.arrivalAirport}/on/${flightFilter.departureDate}`)
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'read_ticket_successful',
                data: res.data
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

        axios.post(`http://localhost:8000/reservations/${reservationId}/tickets`, ticket)
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'create_ticket_successful',
                data: {
                    ticketId: res.data.insertId
                }    
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
