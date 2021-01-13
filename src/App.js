import React, { useContext, useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import RegistroHoc from './components/Registro/RegistroHOC';
import LoginHoc from './components/Login/LoginHOC';
import DashboardHoc from './components/Dashboard/DashboardHOC';
import {ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import {GeneralContext} from './context/GeneralContext';
import Loading from './components/Generic/Loading';

const App = () => {
  const { loading, updateUser } = useContext(GeneralContext);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      console.log(localStorage.getItem('user').toString());
    }
  });
  return (
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Navbar />
        {
          loading &&
            <Loading/>
        }
          <Route path={'/login'} exact component={LoginHoc}/>
        <Route path={'/registro'} exact component={RegistroHoc}/>
        <Route path={'/dashboard'} exact component={DashboardHoc}/>
        <Route path={'/'} exact={true} component={Landing}/>
      </Router>
  );
};

export default App;
