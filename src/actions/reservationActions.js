import Dispatcher from '../dispatcher/appDispatcher'; //flux module
import axios from 'axios' //making asynch calls

//define methods within the object
const BooksActions = {
    readReservation: function(reservationId){
        Dispatcher.dispatch({
            actionType: 'read_reservation_started' //action for spinner
        });
        
        axios.get(`http://localhost:8000/reservations/${reservationId}/tickets`) //returns a promise
        .then(res => { //if successful
            Dispatcher.dispatch({
                actionType: 'read_reservation_successful', //action for displaying data
                data:  res.data
            });
        })
        .catch( (error) => { //if failure
            console.log(error);
            Dispatcher.dispatch({
                actionType: 'read_reservation_failure' //action to display error message
            });
        });
    },

    createReservation: function(reservation) {
        Dispatcher.dispatch({
            actionType: 'create_reservation_started'
        });

        axios.post(`http://localhost:8000/reservations`, reservation)
        .then(res => {
            Dispatcher.dispatch({
                actionType: 'create_reservation_successful',
                data:  {
                    reservationId: res.data.insertId
                }
            });
        })
        .catch( (error) => { 
            console.log(error);
            Dispatcher.dispatch({
                actionType: 'create_reservation_failure'
            });
        });
    },

    deleteReservation: function(reservationId) {
        Dispatcher.dispatch({
            actionType: 'delete_reservation_started'
        });

        axios.delete(`http://localhost:3000//reservations/${reservationId}`)
        .then(() => {
            Dispatcher.dispatch({
                actionType: 'delete_reservation_successful',
                data:  reservationId
            });
        })
        .catch( (error) => { 
            console.log(error);
            Dispatcher.dispatch({
                actionType: 'delete_reservation_failure'
            });
        });
    }
}

module.exports = BooksActions;