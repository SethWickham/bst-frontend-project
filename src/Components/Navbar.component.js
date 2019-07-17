import React, { Component } from 'react';
//here we are bringing in Link from react router dom that
// will help with site navigation
import { Link } from 'react-router-dom';

import styling from '../CSS/Navbar.module.css';

export default class Navbar extends Component {
  render() {
    return (
      //  here we are setting our Links to the correct the appropriate locations and styling them
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
            Output
          </button>
        </Link>
        <Link to="/contact">
          <button className={styling.Button} type="button">
            Contact
          </button>
        </Link>
      </div>
    );
  }
}
