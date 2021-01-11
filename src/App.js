import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import RegistroHoc from './components/Registro/RegistroHOC';
import LoginHoc from './components/Login/LoginHOC';
import DashboardHoc from './components/Dashboard/DashboardHOC';

const App = () => {
  return (
      <Router>
        <Navbar />
          <Route path={'/login'} exact component={LoginHoc}/>
        <Route path={'/registro'} exact component={RegistroHoc}/>
        <Route path={'/dashboard'} exact component={DashboardHoc}/>
        <Route path={'/'} exact={true} component={Landing}/>
      </Router>
  );
};

export default App;
