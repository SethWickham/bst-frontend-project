import React, { Component } from 'react';
import axios from 'axios';

import styling from '../CSS/OutputFirstNames.module.css';

//here we have a stateless component. There are basically two types
//of components in React ones that are class based (see the RenderFirstNames component)
// which have the ability to affect the state of our application and are able to use lifecycle methods,
// and ones that cannot affect the state of our application or using lifecycle methods. whenever possible it is good practice
// to use stateless components to help our application run as smoothly as possible.
const FirstName = props => (
  <div>
    <h3>
      There is no one like you, {props.firstn.firstname}! ...{' '}
      <button
        className={styling.Button}
        onClick={() => {
          props.deleteFirstNameHandler(props.firstn._id);
        }}
      >
        I know, remove me
      </button>
    </h3>
  </div>
);
// This is the Component for our Rendering Page (Output) this is a statuful component that we will be using to update our state
export default class RenderFirstNames extends Component {
  constructor(props) {
    super(props);

    this.deleteFirstNameHandler = this.deleteFirstNameHandler.bind(this);
    this.firstnamelistHandler = this.firstnamelistHandler.bind(this);

    // since we are wanting to display an array we are first
    // telling our state to hold an empty array which will get filled in by user input
    this.state = {
      firstnamelist: []
    };
  }
  //this is a react lifecycle method that will automatically update the state
  // with a get call to our back end in order to display all fo the firstnames in our database
  // we are then setting our state with the data (firstnames) from our back end
  componentDidMount() {
    axios
      .get('http://localhost:3200/firstNames/')
      .then(response => {
        this.setState({ firstnamelist: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  // this is the method that allows users to delete there name
  // we are passing in id which is going to find the specific id that
  // has been assigned by our mongo database
  deleteFirstNameHandler(id) {
    axios
      .delete('http://localhost:3200/firstNames/' + id)
      .then(res => console.log(res.data));
    //then we are setting our state to show a list of names that
    // do not have the id of the element that was just deleted
    this.setState({
      firstnamelist: this.state.firstnamelist.filter(el => el._id !== id)
    });
  }
  // this handler is going to bring our FirstName component from above
  // which will render our names and the text onto the page. We are passing in our mapped
  //values from our first name list.
  firstnamelistHandler() {
    return this.state.firstnamelist.map(currentfirstname => {
      return (
        <FirstName
          firstn={currentfirstname}
          key={currentfirstname._id}
          deleteFirstNameHandler={this.deleteFirstNameHandler}
        />
      );
    });
  }

  render() {
    return (
      //this return is calling our firstnamelistHandler which contains our FirstName component
      <div>
        <div className={styling.Container}>
          <h3 className={styling.List}>{this.firstnamelistHandler()}</h3>
        </div>
      </div>
    );
  }
}
