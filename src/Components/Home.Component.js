import React from 'react';

//here we are bringing in our css styling.
import styling from '../CSS/Home.module.css';

// this is our stateless home component
const Home = props => (
  <div className={styling.Container}>
    <h1 className={styling.Heading}>Welcome</h1>
  </div>
);
export default Home;
