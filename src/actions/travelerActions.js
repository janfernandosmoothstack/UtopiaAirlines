import Dispatcher from '../dispatcher/appDispatcher'; //flux module
import axios from 'axios'; //make asynch calls

const TravelerActions = {
    // readTraveler: function(userId) {
    //     Dispatcher.dispatch({
    //         actionType: 'read_ticket_started'
    //     });

    //     axios.get(`http://localhost:8000/flights/from/${flightFilter.departureAirport}/to/${flightFilter.arrivalAirport}/on/${flightFilter.departureDate}`)
    //     .then(res => {
    //         Dispatcher.dispatch({
    //             actionType: 'read_ticket_successful',
    //             data: res.data
    //         });
    //     })
    //     .catch((error) => {
    //         console.log(error);
            
    //         Dispatcher.dispatch({
    //             actionType: 'read_ticket_failure'
    //         });
    //     });
    // },

    /* Traveler Object
    firstName
    lastName
    phoneNumber
    email
    address
*/
    createTraveler: function(traveler) {
        Dispatcher.dispatch({
            actionType: 'create_traveler_started'
        });

        axios.post(`http://localhost:8000/users`, traveler)
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'create_traveler_successful',
                data: {
                    userId: res.data.insertId,
                    firstName: traveler.firstName,
                    lastName: traveler.lastName,
                    phoneNumber: traveler.phoneNumber,
                    email: traveler.email,
                    address: traveler.address
                }
            });
        })
        .catch((error) => {
            console.log(error);

            Dispatcher.dispatch({
                actionType: 'create_traveler_failure'
            });
        });
    }
}

export default TravelerActions;