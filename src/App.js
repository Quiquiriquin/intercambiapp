import React, { useContext, useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import RegistroHoc from './components/Registro/RegistroHOC';
import LoginHoc from './components/Login/LoginHOC';
import DashboardHoc from './components/Dashboard/DashboardHOC';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {GeneralContext} from './context/GeneralContext';
import Loading from './components/Generic/Loading';
import { useHistory } from 'react-router-dom';
import IntercambioHoc from './components/Dashboard/Panels/Intercambio/IntercambioHOC';
import DetalleIntercambioHoc
  from './components/Dashboard/Panels/DetalleIntercambio/DetalleIntercambioHOC';


const App = () => {
  const history = useHistory();
  const { loading, updateUser, user } = useContext(GeneralContext);
  // useEffect(() => {
  //   if (localStorage.getItem('user')) {
  //     updateUser(JSON.parse(localStorage.getItem('user')));
  //     console.log(JSON.parse(localStorage.getItem('user')));
  //   } else {
  //     console.log('No hay');
  //
  //     console.log(history);
  //   }
  // }, [user]);
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
        <Switch>
          <Route path={'/login'} exact component={LoginHoc}/>
          <Route path={'/registro'} exact component={RegistroHoc}/>
          <Route path={'/dashboard'} exact component={DashboardHoc}/>
          <Route path={'/dashboard/nuevo/intercambio'} exact component={IntercambioHoc}/>
          <Route path={'/dashboard/intercambio/:id'} exact component={DetalleIntercambioHoc}/>
          <Route path={'/'} exact={true}>
            { localStorage.getItem('user') ? <Redirect to={'/dashboard'}/> : <Landing /> }
          </Route>
        </Switch>
      </Router>
  );
};

export default App;
