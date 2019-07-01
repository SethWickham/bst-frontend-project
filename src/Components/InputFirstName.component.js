import React, { Component } from 'react';
//importing our installed dependency axios to help with our http requests
import axios from 'axios';

import styling from '../CSS/InputFirstName.module.css';

//our stateful component that will contain our input "page"
export default class InputFirstName extends Component {
  //we must always use a constructor and super props in order to affect
  // our state they are the "superheros" that allow us to change state
  // thats why they are super (or at least that helps me understand :)
  constructor(props) {
    super(props);

    //here we are binding our this so that the computer knows which this
    // we are referring to
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //here we are setting our state to an empty value
    this.state = {
      firstname: ''
    };
  }
  // this is our method that when called will set our state firstname to
  // value that we are getting from our input
  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  // this method handles the submit on our form and uses our axios http request to send
  // our data to the back end
  onSubmit(e) {
    e.preventDefault();
    const fName = {
      firstname: this.state.firstname
    };
    console.log(fName);

    axios
      .post('http://localhost:3200/firstNames/add', fName)
      //we are then console logging our response so that we know
      // that our connection to the backend was successful
      .then(res => console.log(res.data));
    //then we are setting our state back to empty for the benefit of the user
    // so they don't have to erase and type again if they want to enter another name
    this.setState({
      firstname: ''
    });
  }

  // our render method is where we will render our JSX in our react application
  render() {
    return (
      //here we are using the built in className functionality of
      //react and bringing in our own css file to style our JavaScript (JSX)
      // we are using the this inside of our curly brackets to call our specific methods
      <div className={styling.Container}>
        <div className={styling.Heading}>Please enter your first name</div>
        <div className={styling.Form}>
          <form onSubmit={this.onSubmit}>
            {' '}
            <input
              onChange={this.onChangeFirstname}
              value={this.state.firstname}
              placeholder="YOUR FIRST NAME"
            />{' '}
            <button className={styling.Button}>Enter Name</button>
          </form>
        </div>
        <div className={styling.BottomText}>
          ...And then go to the Output Page
        </div>
      </div>
    );
  }
}
