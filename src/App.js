import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import {ADD_NUMBER} from './actions/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        {console.log(this.props.store.getState())}
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.counter}</h2>
        </div>
        <p className="App-intro">
        <button onClick={this.addNumber}>Add</button>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


function mapDispatchToProps (dispatch) {
  return {
    addNumber: () => dispatch(ADD_NUMBER()),
  }
}



export default connect(mapDispatchToProps)(App);
