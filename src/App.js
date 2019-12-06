import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from './component/home/home.js';
import {SignIn} from './component/account/signin.js';
import {SignUp} from './component/account/signup.js';
import {Header} from './component/header/header.js';
import {Ticket} from './component/ticket.js';
import {Traveler} from './component/traveler.js';
import {Payment} from './component/payment/payment.js';
import {Flights} from './component/flights/flights.js';
import {Confirmation} from './component/confirmation.js';
import {CancelReservation} from './component/cancelRes/cancelReservation.js';
import TicketStore from './store/ticketStore';
import FlightStore from './store/flightStore';
import SignInStore from './store/signinStore';
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

      counter: 1,

      signIn: {
        signInData: {}
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
              <Route path='/tickets' render={(props) => (<Ticket {...props} ticket={this.state.ticket} flight={this.state.flight}></Ticket>)}/>
              <Route path='/traveler' component={Traveler}/>
              <Route path='/flights' render={(props) => (<Flights {...props} airport={this.state.airport} flight={this.state.flight}></Flights>)}/>
              <Route path='/confirmation' component={Confirmation}/>
              <Route path='/cancel' component={CancelReservation}/>
              <Route component={SignIn}/>
              <Route component={SignUp}/>
          </Switch>
      </div>
    );
  }

  _onTicketChange() {
    this.setState({ticket: TicketStore.getTicketsState()});
  }

  _onFlightChange() {
    this.setState({
      airport: FlightStore.getAirportState(),
      flight: FlightStore.getFlightState()
    });
  }

  _onSignInChange() {
    this.setState({signIn: TicketStore.getTicketsState()});
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
  }

  componentWillUnmount() {
    TicketStore.removeChangeListener(this._onTicketChange.bind(this));
    FlightStore.removeChangeListener(this._onFlightChange.bind(this));
  }
}

export default App;