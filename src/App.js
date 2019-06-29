import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Components/Navbar.component';
import InputFirstName from './Components/InputFirstName.component';
import RenderFirstNames from './Components/RenderFirstNames.component';
import Home from './Components/Home.component';
function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/input" component={InputFirstName} />
      <Route path="/render" component={RenderFirstNames} />
      <Route path="/home" component={Home} />
    </Router>
  );
}

export default App;
