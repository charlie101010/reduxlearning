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
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.counter}</h2>
        </div>
        <p className="App-intro">
        <button onClick={this.addNumber}>Add</button>
        <br/>
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

function mapStateToProps (counter) {

  return {counter}
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
