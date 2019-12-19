import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _flightStore = {
    flight: {
        flightList: [],

        flightFilter: {},

        readState: {
            pending:false,
            success:false,
            failure:false
        },

        error: ''
    }
};

//to listen for events
class FlightStoreClass extends EventEmitter{
    
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

    getFlightState() {
        return _flightStore.flight;
    }

    resetReadState() {
        _flightStore.flight.readState = {
            pending:false,
            success:false,
            failure:false
        }
    }
}

const FlightStore = new FlightStoreClass();

Dispatcher.register((action) => {
    switch (action.actionType) {
        case 'read_flight_successful':
            FlightStore.resetReadState();
            _flightStore.flight.flightList = action.data;
            _flightStore.flight.readState.success = true;
            FlightStore.emitChange();
            break;
        
        case 'read_flight_failure':
            FlightStore.resetReadState();
            _flightStore.flight.readState.failure = true
            FlightStore.emitChange();
            break;

        case 'read_flight_started':
            FlightStore.resetReadState();
            _flightStore.flight.readState.pending = true
            FlightStore.emitChange();
            break;
        
        default:
            break;
    }
});

export default FlightStore;