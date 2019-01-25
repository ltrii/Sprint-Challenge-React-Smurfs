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

    

const Smurf = props => {

  const name = (props.name ? props.name : props.smurfs[props.match.params.id].name)
  const height = (props.height ? props.height : props.smurfs[props.match.params.id].height)
  const age = (props.age ? props.age : props.smurfs[props.match.params.id].age)

  function deleteSmurf(id) {
    Axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then((res) => props.smurfRefresh(res.data))
    .catch(err => console.log(err.response));
  }

  return (
      <SmurfDiv>
        {/* <Link key={id} to={`/smurf/${id}`}> */}
        <h3>{name}</h3>
        <strong>{height} tall</strong>
        <p>{age} smurf years old</p>
        <button onClick={deleteSmurf(props.id)}>X</button>
        {/* </Link> */}
      </SmurfDiv>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

