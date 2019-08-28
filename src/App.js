import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Create from './component/Create'
import Modificar from './component/Modificar'
import './App.css';
import 'milligram';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path = '/' exact component = {Home} />
          <Route path = '/create' component = {Create} />
          <Route path = '/modificar/:todoId' component = {Modificar} />
          
        </Router>        
      </div>
    );
  }
}

export default App;
