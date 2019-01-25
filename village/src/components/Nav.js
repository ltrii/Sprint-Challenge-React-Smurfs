import React from 'react';
import {
    NavLink
  } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <NavLink exact to={`/`}>
        <button>Home</button>
      </NavLink>
      <NavLink exact to={`/add`}>
        <button>Add Smurf</button>
      </NavLink>
    </div>
  )
}
