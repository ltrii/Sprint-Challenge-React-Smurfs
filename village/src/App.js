import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Nav from './components/Nav';

import { Route } from 'react-router-dom';

import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

componentDidMount(){
  this.getSmurfs();
}

  getSmurfs() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({ smurfs: res.data })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
      <Nav />

        <Route exact path={`/`}
            render={props => <Smurfs smurfs={this.state.smurfs} />}
            />
        <Route path={`/add`}
            render={props => <SmurfForm />} />
      </div>
    );
  }
}

export default App;
