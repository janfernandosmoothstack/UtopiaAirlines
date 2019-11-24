import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from './component/home/home.js';
import {Header} from './component/header/header.js';
import {Ticket} from './component/ticket.js';
import {Traveler} from './component/traveler.js';
import {Payment} from './component/payment/payment.js';
import {Flights} from './component/flights/flights.js';
import {Confirmation} from './component/confirmation.js';
import './App.css';


class App extends Component {
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
          </Switch>
      </div>
    );
  }
}

export default App;
