import Dispatcher from '../dispatcher/appDispatcher'; //flux module
import axios from 'axios' //making asynch calls

//define methods within the object
const ReservationActions = {
    readReservation: function (reservationId) {
        Dispatcher.dispatch({
            actionType: 'read_reservation_started' //action for spinner
        });

        axios.get(`http://localhost:8000/reservations/${reservationId}/tickets`) //returns a promise
            .then(res => { //if successful
                Dispatcher.dispatch({
                    actionType: 'read_reservation_successful', //action for displaying data
                    data: res.data
                });
            })
            .catch((error) => { //if failure
                console.log(error);
                Dispatcher.dispatch({
                    actionType: 'read_reservation_failure' //action to display error message
                });
            });
    },

    //send traveler and ticket objects

    /* Reservation Object
        reservationId
        userId
        status
        itineraryId
        totalTravelers
    */

    /* Ticket Object
        flightNo - Flights
        departureAirport - Flights
        arrivalAirport - Flights
        departureTime - Flights
        arrivalTime - Flights
        departureDate - Itinerary
        flightPrice - Ticket
        totalTravelers
     */

    /* Traveler Object
       firstName
       lastName
       phoneNumber
       email
       address
    */

    createReservation: function (traveler, ticket) {
        console.log("I am in reservation actions");
        console.log(traveler);
        console.log(ticket);

        Dispatcher.dispatch({
            actionType: 'create_reservation_started'
        });

        axios.post(`http://localhost:8000/users`, traveler)
            .then(res => {

                Dispatcher.dispatch({
                    actionType: 'create_traveler_successful',
                    //set traveler in travelerList
                    data: {
                        userId: res.data.insertId,
                        firstName: traveler.firstName,
                        lastName: traveler.lastName,
                        phoneNumber: traveler.phoneNumber,
                        email: traveler.email,
                        address: traveler.address
                    }
                });

                var reservation = {
                    userId: res.data.insertId,
                    status: 0,
                    totalTravelers: ticket.totalTravelers,
                    itineraryId: ticket.itineraryId
                }

                console.log("This is the new reservation record");
                console.log(reservation);


                axios.post(`http://localhost:8000/reservations`, reservation)
                    .then(res => {
                        Dispatcher.dispatch({
                            actionType: 'create_reservation_successful',
                            //set reservation List
                            data: {
                                reservationId: res.data.insertId,
                                userId: reservation.userId,
                                status: reservation.status,
                                totalTravelers: reservation.totalTravelers
                            }
                        });

                        var reservationId = res.data.insertId;
                        console.log("This is the reservationId");
                        console.log(reservationId);

                        console.log("This is the new ticket record");
                        console.log(ticket);

                        axios.post(`http://localhost:8000/reservations/${reservationId}/tickets`, ticket)
                            .then(() => {
                                ticket.reservationId = reservationId;

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

                    })
                    .catch((error) => {
                        console.log(error);
                        Dispatcher.dispatch({
                            actionType: 'create_reservation_failure'
                        });
                    });
            })
            .catch((error) => {
                console.log(error);

                Dispatcher.dispatch({
                    actionType: 'create_traveler_failure'
                });
            });
    },

    deleteReservation: function (reservationId) {
        Dispatcher.dispatch({
            actionType: 'delete_reservation_started'
        });

        axios.delete(`http://localhost:3000//reservations/${reservationId}`)
            .then(() => {
                Dispatcher.dispatch({
                    actionType: 'delete_reservation_successful',
                    data: reservationId
                });
            })
            .catch((error) => {
                console.log(error);
                Dispatcher.dispatch({
                    actionType: 'delete_reservation_failure'
                });
            });
    }
}

export default ReservationActions;