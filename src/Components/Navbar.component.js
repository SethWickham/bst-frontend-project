import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <h1> NAVBAR</h1>
        <Link to="/home">HOME </Link>
        <Link to="/render">RENDER</Link>
        <Link to="/input">INPUT </Link>
      </div>
    );
  }
}
