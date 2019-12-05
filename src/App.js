import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from './component/home/home.js';
import {Header} from './component/header/header.js';
<<<<<<< HEAD
import Ticket from './component/ticket.js';
=======
import {Ticket} from './component/ticket.js';
>>>>>>> fc7df326b7f522866c33d007a5c36ef1e87a3ed1
import {Traveler} from './component/traveler.js';
import {Payment} from './component/payment/payment.js';
import {Flights} from './component/flights/flights.js';
import {Confirmation} from './component/confirmation.js';
import {CancelReservation} from './component/cancelRes/cancelReservation.js';
import TicketStore from './store/ticketStore';
<<<<<<< HEAD
=======
import FlightStore from './store/flightStore';
>>>>>>> fc7df326b7f522866c33d007a5c36ef1e87a3ed1
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
<<<<<<< HEAD
      }
=======
      },

      airport: {
        airportList: [],

        readState: {
          pending:false,
          success:false,
          failure:false
        },

        error: ''
      },

      flight: {
        flightFilter: {}
      },

      counter: 1
>>>>>>> fc7df326b7f522866c33d007a5c36ef1e87a3ed1
    }
  }

  render() {
    return (
      <div>
          <Header />
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/payment' component={Payment}/>
<<<<<<< HEAD
              <Route path='/tickets' component={Ticket}/>
              <Route path='/traveler' component={Traveler}/>
              <Route path='/flights' component={Flights}/>
=======
              <Route path='/tickets' render={(props) => (<Ticket {...props} ticket={this.state.ticket} flight={this.state.flight}></Ticket>)}/>
              <Route path='/traveler' component={Traveler}/>
              <Route path='/flights' render={(props) => (<Flights {...props} airport={this.state.airport} flight={this.state.flight}></Flights>)}/>
>>>>>>> fc7df326b7f522866c33d007a5c36ef1e87a3ed1
              <Route path='/confirmation' component={Confirmation}/>
              <Route path='/cancel' component={CancelReservation}/>
          </Switch>
      </div>
    );
  }

  _onTicketChange() {
    this.setState({ticket: TicketStore.getTicketsState()});
  }

<<<<<<< HEAD
  componentDidMount() {
    TicketStore.addChangeListener(this._onTicketChange.bind(this));
=======
  _onFlightChange() {
    this.setState({
      airport: FlightStore.getAirportState(),
      flight: FlightStore.getFlightState()
    });
  }

  _onPageNext() {
    this.setState({counter: this.state.counter + 1});
  }

  _onPageBack() {
    this.setState({counter: this.state.counter - 1});
  }

  componentDidMount() {
    TicketStore.addChangeListener(this._onTicketChange.bind(this));
    FlightStore.addChangeListener(this._onFlightChange.bind(this));
>>>>>>> fc7df326b7f522866c33d007a5c36ef1e87a3ed1
  }

  componentWillUnmount() {
    TicketStore.removeChangeListener(this._onTicketChange.bind(this));
<<<<<<< HEAD
=======
    FlightStore.removeChangeListener(this._onFlightChange.bind(this));
>>>>>>> fc7df326b7f522866c33d007a5c36ef1e87a3ed1
  }
}

export default App;