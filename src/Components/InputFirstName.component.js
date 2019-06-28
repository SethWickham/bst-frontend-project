import React, { Component } from 'react';
import axios from 'axios';

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
  }

  render() {
    return (
      <div>
        <h1>
          <form onSubmit={this.onSubmit}>
            <input
              onChange={this.onChangeFirstname}
              value={this.state.firstname}
              placeholder="YOUR FIRST NAME"
            />
            <button>Submit</button>
          </form>
        </h1>
      </div>
    );
  }
}
