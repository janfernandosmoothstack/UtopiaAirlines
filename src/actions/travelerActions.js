import Dispatcher from '../dispatcher/appDispatcher'; //flux module
import axios from 'axios'; //make asynch calls

const TravelerActions = {

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

        axios.post(`https://qpyf4i2dz1.execute-api.us-east-2.amazonaws.com/dev/users`, traveler)
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