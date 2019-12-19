import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _reservationStore = {
    reservation: {
        reservationList: [],

        reservationId: 0,

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

        deleteState: {
            pending:false,
            success:false,
            failure:false
        },

        error: ''
    }
};

//to listen for events
class ReservationStoreClass extends EventEmitter{
    
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

    getReservationState() {
        return _reservationStore.reservation;
    }

    resetReadState() {
        _reservationStore.reservation.readState = {
            pending:false,
            success:false,
            failure:false
        }
    }

    resetCreateState() {
        _reservationStore.reservation.createState = {
            pending:false,
            success:false,
            failure:false
        }
    }

    resetDeleteState() {
        _reservationStore.reservation.deleteState = {
            pending:false,
            success:false,
            failure:false
        }
    }
}

const ReservationStore = new ReservationStoreClass();

Dispatcher.register((action) => {
    switch (action.actionType) {
        case 'read_reservation_successful':
            ReservationStore.resetReadState();
            _reservationStore.reservation.reservationList = action.data;
            _reservationStore.reservation.readState.success = true;
            ReservationStore.emitChange();
            break;
        
        case 'read_reservation_failure':
            ReservationStore.resetReadState();
            _reservationStore.reservation.readState.failure = true
            ReservationStore.emitChange();
            break;

        case 'read_reservation_pending':
            ReservationStore.resetReadState();
            _reservationStore.reservation.readState.pending = true
            ReservationStore.emitChange();
            break;

        case 'create_reservation_successful':
            ReservationStore.resetCreateState();
            _reservationStore.reservation.reservationList.push(action.data);
            _reservationStore.reservation.createState.success = true;
            ReservationStore.emitChange();
            break;
        
        case 'create_reservation_failure':
            ReservationStore.resetCreateState();
            _reservationStore.reservation.createState.failure = true
            ReservationStore.emitChange();
            break;

        case 'create_reservation_pending':
            ReservationStore.resetCreateState();
            _reservationStore.reservation.createState.pending = true
            ReservationStore.emitChange();
            break;

        case 'delete_reservation_successful':
            ReservationStore.resetDeleteState();
            _reservationStore.reservation.deleteState.success = true;
            ReservationStore.emitChange();
            break;
        
        case 'delete_reservation_failure':
            ReservationStore.resetDeleteState();
            _reservationStore.reservation.deleteState.failure = true;
            ReservationStore.emitChange();
            break;

        case 'delete_reservation_pending':
            ReservationStore.resetDeleteState();
            _reservationStore.reservation.deleteState.pending = true;
            ReservationStore.emitChange();
            break;
        
        default:
            break;
    }
});

export default ReservationStore;