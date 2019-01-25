import React from 'react';
import {
    NavLink
  } from 'react-router-dom';

import styled from 'styled-components';

const NavHold = styled.div`


    button {
        border: none;
        background-color: rgb(245,245,245);
        padding: 20px;

        &:hover{
            background-color: rgb(235,235,235);
        }
    }
  `;

export default function Nav() {
  return (
    <NavHold>
      <NavLink exact to={`/`}>
        <button>Home</button>
      </NavLink>
      <NavLink exact to={`/add`}>
        <button>Add Smurf</button>
      </NavLink>
    </NavHold>
  )
}
