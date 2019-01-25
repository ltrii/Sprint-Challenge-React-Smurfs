import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Nav from './components/Nav';
import Smurf from './components/Smurf';

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

componentDidUpdate(){
  console.log("UPDATE");
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
      <h1>Smurf Village</h1>
        <Route exact path={`/`}
            render={props => <Smurfs smurfs={this.state.smurfs} />}
            />
            
        <Route path={"/smurf/:id"} render={props =>(
          <div className="Smurfs"> 
            <Smurf {...props} smurfs={this.state.smurfs}/>
          </div>
          )}/>

        <Route path={`/add`}
            render={props => <SmurfForm {...props} />} />
      </div>
    );
  }
}

export default App;
