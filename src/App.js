import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './component/home/home.js';
import { SignIn } from './component/account/signin.js';
import { SignUp } from './component/account/signup.js';
import { Header } from './component/header/header.js';
import { Ticket } from './component/ticket/ticket.js';
import { Traveler } from './component/traveler/traveler.js';
import { Payment } from './component/payment/payment.js';
import { Flights } from './component/flights/flights.js';
import { Confirmation } from './component/confirmation.js';
import { CancelReservation } from './component/cancelRes/cancelReservation.js';
import TicketStore from './store/ticketStore';
import FlightStore from './store/flightStore';
import SignInStore from './store/signinStore';
import TravelerStore from './store/travelerStore';
import ReservationStore from './store/reservationStore'
import './App.css';

//app/js
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ticket: {
        ticketList: [],

        selectedTicketList: [],

        readState: {
          pending: false,
          success: false,
          failure: false
        },

        createState: {
          pending: false,
          success: false,
          failure: false
        },

        error: ''
      },

      airport: {
        airportList: [],

        readState: {
          pending: false,
          success: false,
          failure: false
        },

        error: ''
      },

      flight: {
        flightFilter: {},

        error: ''
      },

      traveler: {
        travelerList: [],

        readState: {
          pending: false,
          success: false,
          failure: false
        },

        createState: {
          pending: false,
          success: false,
          failure: false
        },

        error: ''
      },

      reservation: {
        reservationList: [],

        readState: {
          pending: false,
          success: false,
          failure: false
        },

        createState: {
          pending: false,
          success: false,
          failure: false
        },

        deleteState: {
          pending: false,
          success: false,
          failure: false
        },

        error: ''
      },

      signIn: {
        signInData: {},

        error: ''
      }
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/payment' component={Payment} />
          <Route path='/tickets' render={(props) => (<Ticket {...props} airport={this.state.airport} ticket={this.state.ticket} flight={this.state.flight}></Ticket>)} />
          <Route path='/traveler' render={(props) => (<Traveler {...props} ticket={this.state.ticket} traveler={this.state.traveler} flight={this.state.flight}></Traveler>)} />
          <Route path='/flights' render={(props) => (<Flights {...props} airport={this.state.airport} flight={this.state.flight}></Flights>)} />
          <Route path='/confirmation' render={(props) => (<Confirmation {...props} traveler={this.state.traveler} reservation={this.state.reservation} ticket={this.state.ticket}></Confirmation>)} />
          <Route path='/cancel' component={CancelReservation} />
        </Switch>
      </div>
    );
  }

  _onTicketChange() {
    this.setState({
      ticket: TicketStore.getTicketsState(),
      airport: FlightStore.getAirportState(),
      flight: FlightStore.getFlightState()
    });
  }

  _onFlightChange() {
    this.setState({
      airport: FlightStore.getAirportState(),
      flight: FlightStore.getFlightState()
    });
  }

  _onTravelerChange() {
    this.setState({traveler: TravelerStore.getTravelerState()});
  }

  _onReservationChange() {
    this.setState({reservation: ReservationStore.getReservationState()});
  }

  componentDidMount() {
    TicketStore.addChangeListener(this._onTicketChange.bind(this));
    FlightStore.addChangeListener(this._onFlightChange.bind(this));
    TravelerStore.addChangeListener(this._onTravelerChange.bind(this));
    ReservationStore.addChangeListener(this._onReservationChange.bind(this));
  }

  componentWillUnmount() {
    TicketStore.removeChangeListener(this._onTicketChange.bind(this));
    FlightStore.removeChangeListener(this._onFlightChange.bind(this));
    TravelerStore.removeChangeListener(this._onTravelerChange.bind(this));
    ReservationStore.removeChangeListener(this._onReservationChange.bind(this));
  }
}

export default App;