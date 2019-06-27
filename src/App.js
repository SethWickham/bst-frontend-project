import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import InputFirstName from './Components/InputFirstName';
import RenderFirstNames from './Components/RenderFirstNames';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Breakthrough</h1>
        <InputFirstName />
        <RenderFirstNames />
      </div>
    </Router>
  );
}

export default App;
