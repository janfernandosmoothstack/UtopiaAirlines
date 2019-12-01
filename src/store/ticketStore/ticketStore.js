import Dispatcher from '../../dispatcher/appDispatcher';
import TicketStoreClass from './TicketStoreClass';

const TicketStore = new TicketStoreClass();

Dispatcher.register((action) => {
    switch (action.actionType) {
        case 'read_tickets_successful':
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

        case 'select_tickets_successful':
            TicketStore.resetSelectState();
            _ticketStore.ticket.ticketList = action.data;
            _ticketStore.ticket.selectState.success = true;
            TicketStore.emitChange();
            break;
        
        case 'select_ticket_failure':
            TicketStore.resetSelectState();
            _ticketStore.ticket.selectState.failure = true
            TicketStore.emitChange();
            break;

        case 'select_ticket_pending':
            TicketStore.resetSelectState();
            _ticketStore.ticket.selectState.pending = true
            TicketStore.emitChange();
            break;
        
        default:
            break;
    }
});

export default TicketStore;