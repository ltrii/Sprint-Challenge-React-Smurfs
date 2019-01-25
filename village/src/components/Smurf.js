import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SmurfDiv = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;

    &:hover{
      background-color: rgb(245,245,245);
    }
  `;

class Smurf extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  deleteSmurf = (id) => {
    Axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then((res) => this.props.smurfRefresh(res.data))
    .catch(err => console.log(err.response));
  }

render(){

  return (
      <SmurfDiv>
        {/* <Link key={id} to={`/smurf/${id}`}> */}
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <button onClick={e => {
          e.stopPropagation();
          this.deleteSmurf(this.props.id)}}>X</button>
        {/* </Link> */}
      </SmurfDiv>
  );
};
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

