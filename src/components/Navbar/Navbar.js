import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {GeneralContext} from '../../context/GeneralContext';
const Navbar = () => {

    const { user, updateUser } = useContext(GeneralContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light main-green">
            <div className="container-fluid white-font">
                <a className="navbar-brand white-font" href="/">
                    <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30"
                         height="24" className="d-inline-block align-top" />
                        Intercambiapp
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse white-font" id="navbarNav">
                        <ul className={'me-auto'}></ul>
                        <span className={'navbar-text'}>
                            {
                                !user ?
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link to={'/login'} className={'nav-link white-font nav-hover' +
                                            ' me-3'}>
                                                Iniciar sesión
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/registro'} className={'nav-link white-font' +
                                            ' signup-button'}>
                                                Registrarme
                                            </Link>
                                        </li>
                                    </ul>
                                  :
                                      <ul className="navbar-nav">
                                          <li className="nav-item">
                                              <Link to={'/'} onClick={() => { localStorage.clear(); sessionStorage.clear(); updateUser(null) }} className={'nav-link' +
                                              ' white-font' +
                                              ' nav-hover' +
                                              ' me-3'}>
                                                  Cerrar sesión
                                              </Link>
                                          </li>
                                      </ul>

                            }
                        </span>
                    </div>
            </div>
        </nav>
    );
};

export default Navbar;
