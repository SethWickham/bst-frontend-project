import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styling from '../CSS/Navbar.module.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className={styling.Navbar}>
        <Link to="/home">
          <button className={styling.Button} type="button">
            Home
          </button>
        </Link>
        <Link to="/input">
          <button className={styling.Button} type="button">
            Input
          </button>
        </Link>
        <Link to="/render">
          <button className={styling.Button} type="button">
            Render
          </button>
        </Link>
      </div>
    );
  }
}
