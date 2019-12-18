import Dispatcher from '../dispatcher/appDispatcher'; //flux module
import axios from 'axios' //making asynch calls

//define methods within the object
const ReservationActions = {
    readReservation: function (reservationId) {
        Dispatcher.dispatch({
            actionType: 'read_reservation_started' //action for spinner
        });

        axios.get(`https://qpyf4i2dz1.execute-api.us-east-2.amazonaws.com/dev/reservations/${reservationId}/tickets`) //returns a promise
            .then(res => { //if successful
                Dispatcher.dispatch({
                    actionType: 'read_ticket_successful', //action for displaying data
                    data: res.data
                });
                console.log("I am in res actions ticket get call")
                console.log(res.data);

                const itineraryId = res.data[0].itineraryId;

                axios.get(`https://qpyf4i2dz1.execute-api.us-east-2.amazonaws.com/dev/itineraries/${itineraryId}`) //returns a promise
                    .then(res => { //if successful
                        Dispatcher.dispatch({
                            actionType: 'read_itinerary_successful', //action for displaying data
                            data: res.data
                        });
                        console.log("I am in res actions itinerary get call")
                        console.log(res.data);

                        const flightNo = res.data[0].flightNo;

                        axios.get(`https://qpyf4i2dz1.execute-api.us-east-2.amazonaws.com/dev/flights/${flightNo}`) //returns a promise
                            .then(res => { //if successful
                                Dispatcher.dispatch({
                                    actionType: 'read_flight_successful', //action for displaying data
                                    data: res.data
                                });
                                console.log("I am in res actions flight get call")
                                console.log(res.data);

                                const departureAirport = res.data[0].departureAirport;
                                const arrivalAirport = res.data[0].arrivalAirport;

                                axios.get(`https://qpyf4i2dz1.execute-api.us-east-2.amazonaws.com/dev/airports/departureAirport/${departureAirport}/arrivalAirport/${arrivalAirport}`) //returns a promise
                                    .then(res => { //if successful
                                        Dispatcher.dispatch({
                                            actionType: 'read_airport_successful', //action for displaying data
                                            data: res.data
                                        });
                                        console.log("I am in res actions airport get call")
                                        console.log(res.data);

                                    })
                                    .catch((error) => { //if failure
                                        console.log(error);
                                        Dispatcher.dispatch({
                                            actionType: 'read_airport_failure' //action to display error message
                                        });
                                    });

                            })
                            .catch((error) => { //if failure
                                console.log(error);
                                Dispatcher.dispatch({
                                    actionType: 'read_flight_failure' //action to display error message
                                });
                            });
                    })
                    .catch((error) => { //if failure
                        console.log(error);
                        Dispatcher.dispatch({
                            actionType: 'read_itinerary_failure' //action to display error message
                        });
                    });
            })
            .catch((error) => { //if failure
                console.log(error);
                Dispatcher.dispatch({
                    actionType: 'read_ticket_failure' //action to display error message
                });
            });
    },

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
        Dispatcher.dispatch({
            actionType: 'create_reservation_started'
        });

        axios.post(`https://qpyf4i2dz1.execute-api.us-east-2.amazonaws.com/dev/users`, traveler)
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

                axios.post(`https://qpyf4i2dz1.execute-api.us-east-2.amazonaws.com/dev/reservations`, reservation)
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

                        axios.post(`https://qpyf4i2dz1.execute-api.us-east-2.amazonaws.com/dev/reservations/${reservationId}/tickets`, ticket)
                            .then(() => {
                                Dispatcher.dispatch({
                                    actionType: 'create_ticket_successful'
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

        axios.delete(`https://qpyf4i2dz1.execute-api.us-east-2.amazonaws.com/dev/reservations/${reservationId}`)
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