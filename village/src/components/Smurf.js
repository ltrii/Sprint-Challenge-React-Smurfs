import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

    

const Smurf = props => {

  const name = (props.name ? props.name : props.smurfs[props.match.params.id].name)
  const height = (props.height ? props.height : props.smurfs[props.match.params.id].height)
  const age = (props.age ? props.age : props.smurfs[props.match.params.id].age)

  function deleteSmurf() {
    Axios.delete(`http://localhost:3333/smurf/${props.id}`)
    .then((res) => console.log(res))
    .catch(err => console.log(err.response));
  }

  return (
      <div className="Smurf">
        {/* <Link key={id} to={`/smurf/${id}`}> */}
        <h3>{name}</h3>
        <strong>{height} tall</strong>
        <p>{age} smurf years old</p>
        <button onClick={deleteSmurf}>X</button>
        {/* </Link> */}
      </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

