import React, { Component } from 'react';
import axios from 'axios';

import styling from '../CSS/RenderFN.module.css';
import renderbg from '../IMG/RenderBackground.jpg';

const FirstName = props => (
  <div>
    <h3>There is no one like you {props.firstn.firstname}!</h3>
  </div>
);

export default class RenderFirstNames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstnamelist: []
    };
  }
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
  firstnamelistHandler() {
    return this.state.firstnamelist.map(currentfirstname => {
      console.log(currentfirstname);
      return <FirstName firstn={currentfirstname} key={currentfirstname._id} />;
    });
  }

  render() {
    return (
      <div className={styling.Container}>
        <img src={renderbg} />
        <h3 className={styling.List}>{this.firstnamelistHandler()}</h3>
      </div>
    );
  }
}
