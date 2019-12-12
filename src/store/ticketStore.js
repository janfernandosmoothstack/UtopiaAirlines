import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _ticketStore = {
    ticket: {
        ticketList: [],

        selectedTicketList: [],

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
class TicketStoreClass extends EventEmitter{
    
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

    getTicketsState() {
        return _ticketStore.ticket;
    }

    resetReadState() {
        _ticketStore.ticket.readState = {
            pending:false,
            success:false,
            failure:false
        }
    }

    resetCreateState() {
        _ticketStore.ticket.createState = {
            pending:false,
            success:false,
            failure:false
        }
    }
}

const TicketStore = new TicketStoreClass();

Dispatcher.register((action) => {
    switch (action.actionType) {
        case 'read_ticket_successful':
            TicketStore.resetReadState();
            _ticketStore.ticket.ticketList = action.data;
            _ticketStore.ticket.readState.success = true;
            TicketStore.emitChange();
            break;
        
        case 'read_ticket_failure':
            TicketStore.resetReadState();
            _ticketStore.ticket.readState.failure = true
            TicketStore.emitChange();
            break;

        case 'read_ticket_pending':
            TicketStore.resetReadState();
            _ticketStore.ticket.readState.pending = true
            TicketStore.emitChange();
            break;

        case 'create_ticket_successful':
            TicketStore.resetCreateState();
            _ticketStore.ticket.createState.success = true;
            TicketStore.emitChange();
            break;
        
        case 'create_ticket_failure':
            TicketStore.resetCreateState();
            _ticketStore.ticket.createState.failure = true
            TicketStore.emitChange();
            break;

        case 'create_ticket_pending':
            TicketStore.resetCreateState();
            _ticketStore.ticket.createState.pending = true
            TicketStore.emitChange();
            break;
        
        default:
            break;
    }
});

export default TicketStore;