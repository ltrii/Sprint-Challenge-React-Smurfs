import React, { Component } from 'react';

import styled from 'styled-components';

import Smurf from './Smurf';

const SmurfHold = styled.div`
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: 2px solid rgb(245,245,245);
    border-radius: 2px;
    width: 80%;
    margin: auto;
    padding: 20px;

  `;


class Smurfs extends Component {
  render() {
    console.log(this.props.smurfs)
    return (
      <SmurfHold>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                smurfRefresh={this.props.smurfRefresh}
                key={smurf.id}
              />
            );
          })}
      </SmurfHold>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
