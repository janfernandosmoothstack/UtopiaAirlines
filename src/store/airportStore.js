import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _airportStore = {
    airport: {
        airportList: [],

        readState: {
            pending:false,
            success:false,
            failure:false
        },

        error: ''
    }
};

//to listen for events
class AirportStoreClass extends EventEmitter{
    
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

    getAirportState() {
        return _airportStore.airport;
    }

    resetReadState() {
        _airportStore.airport.readState = {
            pending:false,
            success:false,
            failure:false
        }
    }
}

const AirportStore = new AirportStoreClass();

Dispatcher.register((action) => {
    switch (action.actionType) {
        case 'read_airport_successful':
            AirportStore.resetReadState();
            _airportStore.airport.airportList = action.data;
            _airportStore.airport.readState.success = true;
            AirportStore.emitChange();
            break;
        
        case 'read_airport_failure':
            AirportStore.resetReadState();
            _airportStore.airport.readState.failure = true
            AirportStore.emitChange();
            break;

        case 'read_airport_pending':
            AirportStore.resetReadState();
            _airportStore.airport.readState.pending = true
            AirportStore.emitChange();
            break;
        
        default:
            break;
    }
});

export default AirportStore;