import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from './component/home/home.js';
import {Header} from './component/header/header.js';
import Ticket from './component/ticket.js';
import {Traveler} from './component/traveler.js';
import {Payment} from './component/payment/payment.js';
import {Flights} from './component/flights/flights.js';
import {Confirmation} from './component/confirmation.js';
import {CancelReservation} from './component/cancelRes/cancelReservation.js';
import TicketStore from './store/ticketStore';
import './App.css';

//app/js
class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      ticket: {
        ticketList: [],

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
    }
  }

  render() {
    return (
      <div>
          <Header />
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/payment' component={Payment}/>
              <Route path='/tickets' component={Ticket}/>
              <Route path='/traveler' component={Traveler}/>
              <Route path='/flights' component={Flights}/>
              <Route path='/confirmation' component={Confirmation}/>
              <Route path='/cancel' component={CancelReservation}/>
          </Switch>
      </div>
    );
  }

  _onTicketChange() {
    this.setState({ticket: TicketStore.getTicketsState()});
  }

  componentDidMount() {
    TicketStore.addChangeListener(this._onTicketChange.bind(this));
  }

  componentWillUnmount() {
    TicketStore.removeChangeListener(this._onTicketChange.bind(this));
  }
}

export default App;