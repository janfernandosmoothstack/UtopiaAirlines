import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _userStore = {
    user: {
        userList: {},

        readState: {
            pending:false,
            success:false,
            failure:false
        },

        error: ''
    }
};

//to listen for events
class UserStoreClass extends EventEmitter{
    
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

    getUserState() {
        return _userStore.user;
    }

    resetReadState() {
        _userStore.user.readState = {
            pending:false,
            success:false,
            failure:false
        }
    }
}

const UserStore = new UserStoreClass();

Dispatcher.register((action) => {
    switch (action.actionType) {
        case 'read_user_successful':
            UserStore.resetReadState();
            _userStore.user.userList = action.data;
            _userStore.user.readState.success = true;
            UserStore.emitChange();
            break;
        
        case 'read_user_failure':
            UserStore.resetReadState();
            _userStore.user.readState.failure = true
            UserStore.emitChange();
            break;

        case 'read_user_pending':
            UserStore.resetReadState();
            _userStore.user.readState.pending = true
            UserStore.emitChange();
            break;
        
        default:
            break;
    }
}); 

export default UserStore;