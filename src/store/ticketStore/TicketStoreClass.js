import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _ticketStore = {
    ticket: {
        ticketList: [],

        readState: {
            pending:false,
            success:false,
            failure:false
        },

        selectState: {
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

    resetSelectState() {
        _ticketStore.ticket.selectState = {
            pending:false,
            success:false,
            failure:false
        }
    }
}