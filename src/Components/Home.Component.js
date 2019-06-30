import React, { Component } from 'react';

import styling from '../CSS/Home.module.css';

export default class Home extends Component {
  render() {
    return (
      <div className={styling.Container}>
        <h1 className={styling.Heading}>Welcome</h1>
      </div>
    );
  }
}
