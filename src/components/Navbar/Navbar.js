import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
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
                <div className={'d-flex white-font'}>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/login'} className={'nav-link white-font nav-hover'}>
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
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
