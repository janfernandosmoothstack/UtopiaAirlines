import Dispatcher from '../dispatcher/appDispatcher'; //flux module
import axios from 'axios'; //make asynch calls

const AirportActions = {
    readAirports: function(){
        Dispatcher.dispatch({
            actionType: 'read_airport_started' //action for spinner
        });
        
        axios.get(`https://qpyf4i2dz1.execute-api.us-east-2.amazonaws.com/dev/airports`) //returns a promise
        .then(res => { //if successful
            Dispatcher.dispatch({
                actionType: 'read_airport_successful', //action for displaying data
                data:  res.data
            });
        })
        .catch( (error) => { //if failure
            console.log(error);
            Dispatcher.dispatch({
                actionType: 'read_airport_failure' //action to display error message
            });
        });
    }
}

export default AirportActions;