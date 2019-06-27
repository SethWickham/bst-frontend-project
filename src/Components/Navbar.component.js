import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/render">RENDER LINK</Link>
        <Link to="/input">INPUT LINK</Link>
        Hi I'm NAVBAR
      </div>
    );
  }
}
