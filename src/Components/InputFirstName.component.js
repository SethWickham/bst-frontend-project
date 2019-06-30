import React, { Component } from 'react';
import axios from 'axios';

import styling from '../CSS/InputFN.module.css';

export default class InputFirstName extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: ''
    };
  }

  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const fName = {
      firstname: this.state.firstname
    };
    console.log(fName);

    axios
      .post('http://localhost:3200/firstNames/add', fName)
      .then(res => console.log(res.data));
    this.setState({
      firstname: ''
    });
  }

  render() {
    return (
      <div className={styling.Container}>
        {' '}
        <h2>Please enter your first name</h2>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChangeFirstname}
            value={this.state.firstname}
            placeholder="YOUR FIRST NAME"
          />
          <br />
          <button className={styling.Button}>Enter</button>
        </form>
        <h3>...And then go to the Render Page</h3>
      </div>
    );
  }
}
