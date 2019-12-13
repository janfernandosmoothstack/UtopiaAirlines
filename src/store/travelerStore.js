import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _travelerStore = {
    traveler: {
        travelerList: [],

        readState: {
            pending:false,
            success:false,
            failure:false
        },

        createState: {
            pending:false,
            success:false,
            failure:false
        },

        error: ''
    }
};

//to listen for events
class TravelerStoreClass extends EventEmitter{
    
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

    getTravelerState() {
        return _travelerStore.traveler;
    }

    resetReadState() {
        _travelerStore.traveler.readState = {
            pending:false,
            success:false,
            failure:false
        }
    }

    resetCreateState() {
        _travelerStore.traveler.createState = {
            pending:false,
            success:false,
            failure:false
        }
    }
}

const TravelerStore = new TravelerStoreClass();

Dispatcher.register((action) => {
    switch (action.actionType) {
        case 'read_traveler_successful':
            TravelerStore.resetReadState();
            _travelerStore.traveler.travelerList = action.data;
            _travelerStore.traveler.readState.success = true;
            TravelerStore.emitChange();
            break;
        
        case 'read_traveler_failure':
            TravelerStore.resetReadState();
            _travelerStore.traveler.readState.failure = true
            TravelerStore.emitChange();
            break;

        case 'read_traveler_pending':
            TravelerStore.resetReadState();
            _travelerStore.traveler.readState.pending = true
            TravelerStore.emitChange();
            break;

        case 'create_traveler_successful':
            TravelerStore.resetCreateState();
            _travelerStore.traveler.travelerList.push(action.data);
            _travelerStore.traveler.createState.success = true;
            TravelerStore.emitChange();
            break;
        
        case 'create_traveler_failure':
            TravelerStore.resetCreateState();
            _travelerStore.traveler.createState.failure = true
            TravelerStore.emitChange();
            break;

        case 'create_traveler_pending':
            TravelerStore.resetCreateState();
            _travelerStore.traveler.createState.pending = true
            TravelerStore.emitChange();
            break;
        
        default:
            break;
    }
});

export default TravelerStore;