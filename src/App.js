import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import RegistroHoc from './components/Registro/RegistroHOC';

const App = () => {
  return (
      <Router>
        <Navbar />
        <Route path={'/registro'} exact component={RegistroHoc}/>
        <Route path={'/'} exact={true} component={Landing}/>
      </Router>
  );
};

export default App;
