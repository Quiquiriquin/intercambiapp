import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
      <Router>
        <Navbar />
        <Route path={'/'} exact component={Landing}/>
      </Router>
  );
};

export default App;
