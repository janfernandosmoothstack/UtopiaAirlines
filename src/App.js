import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from './component/home.js';
import {Header} from './component/header.js';
import {Ticket} from './component/ticket.js';
import {Traveler} from './component/traveler.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/ticket' component={Ticket}/>
              <Route path='/traveler' component={Traveler}/>
          </Switch>
      </div>
    );
  }
}

export default App;
