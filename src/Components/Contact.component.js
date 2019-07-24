import React from 'react';

//here we are bringing in our css styling.
import styling from '../CSS/Contact.module.css';

// stateless Contact component
const Contact = props => (
  <div className={styling.Container}>
    <h1 className={styling.Heading}>
      Created by Seth Wickham
      <br />
      <a href="https://github.com/SethWickham">GitHub</a>
      <br />
      <a href="https://www.linkedin.com/in/seth-wickham-full-stack-dev/">
        LinkedIn
      </a>
    </h1>
  </div>
);
export default Contact;
