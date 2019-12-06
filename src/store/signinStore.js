import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _signInStore = {
    signIn: {
        signInData: {}
    }
};

//to listen for events
class SignInStoreClass extends EventEmitter{
    
    //listens for changes
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    //notifies when there is a change
    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getSignInState() {
        return _signInStore.signIn;
    }
}

const SignInStore = new SignInStoreClass();

// Dispatcher.register((action) => {
//     switch (action.actionType) {
//         case 'read_airport_successful':
//             FlightStore.resetReadState();
//             _flightStore.airport.airportList = action.data;
//             _flightStore.airport.readState.success = true;
//             FlightStore.emitChange();
//             break;
        
//         case 'read_airport_failure':
//             FlightStore.resetReadState();
//             _flightStore.airport.readState.failure = true
//             FlightStore.emitChange();
//             break;

//         case 'read_airport_pending':
//             FlightStore.resetReadState();
//             _flightStore.airport.readState.pending = true
//             FlightStore.emitChange();
//             break;
        
//         default:
//             break;
//     }
// });

export default SignInStore;