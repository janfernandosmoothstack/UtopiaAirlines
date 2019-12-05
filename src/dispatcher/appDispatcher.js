import { Dispatcher } from 'flux';

//allows the rest of the application to use the dispatcher
//dispatcher tells the rest of the application if somethign has happened
class DispatcherClass extends Dispatcher {
}

const AppDispatcher = new DispatcherClass();

export default AppDispatcher;