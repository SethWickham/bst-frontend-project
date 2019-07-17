//This is the Center of our Front End application
// Even though our Application appears to have multiple pages
// it infact is a single page application where we are rendering different components and
// managing the state of our application based upon user input

// Since we are creating a react application we are bringing in
// our necessary imports to help run our application
import React from 'react';
// the Browser Router is from the react router dom that helps
// aid in the navigation of our site
import { BrowserRouter as Router, Route } from 'react-router-dom';

//if something is going to be in our application its needs to either be
// connected to our App.js file or be connected to another file that is
// this is where we import our components into our Application
import Navbar from './Components/Navbar.component';
import InputFirstName from './Components/InputFirstName.component';
import RenderFirstNames from './Components/RenderFirstNames.component';
import Home from './Components/Home.component';
import Contact from './Components/Contact.component';

//This is the Center point of our application
function App() {
  return (
    //here we are bringing in our components and setting our routes to their proper paths
    <Router>
      <Navbar />
      <Route path="/input" component={InputFirstName} />
      <Route path="/render" component={RenderFirstNames} />
      <Route path="/home" component={Home} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}
// here we export our Application which will be sent into
// our index.html root div
export default App;
