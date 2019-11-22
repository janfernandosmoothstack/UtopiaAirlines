import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from './component/home.js';
import {Header} from './component/header.js';
import './App.css';
import {Payment} from './component/payment.js';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/payment' component={Payment}/>
          </Switch>
      </div>
    );
  }
}

export default App;
