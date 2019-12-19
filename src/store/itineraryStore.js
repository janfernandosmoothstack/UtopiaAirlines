import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _itineraryStore = {
    itinerary: {
        itineraryList: [],

        readState: {
            pending:false,
            success:false,
            failure:false
        },

        error: ''
    }
};

//to listen for events
class ItineraryStoreClass extends EventEmitter{
    
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

    getItineraryState() {
        return _itineraryStore.itinerary;
    }

    resetReadState() {
        _itineraryStore.itinerary.readState = {
            pending:false,
            success:false,
            failure:false
        }
    }
}

const ItineraryStore = new ItineraryStoreClass();

Dispatcher.register((action) => {
    switch (action.actionType) {
        case 'read_itinerary_successful':
            ItineraryStore.resetReadState();
            _itineraryStore.itinerary.itineraryList = action.data;
            _itineraryStore.itinerary.readState.success = true;
            ItineraryStore.emitChange();
            break;
        
        case 'read_itinerary_failure':
            ItineraryStore.resetReadState();
            _itineraryStore.itinerary.readState.failure = true
            itineraryStore.emitChange();
            break;

        case 'read_itinerary_started':
            ItineraryStore.resetReadState();
            _itineraryStore.itinerary.readState.pending = true
            ItineraryStore.emitChange();
            break;
        
        default:
            break;
    }
});

export default ItineraryStore;