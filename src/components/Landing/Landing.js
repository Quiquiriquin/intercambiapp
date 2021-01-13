import React from 'react';
import './Landing.css';
import Header from './Header';
import chat from '../../assets/imgs/lotties/chat_organiza.json';
import Steps from './Steps';
import MainCarousel from './MainCarousel';

const Landing = () => {
    console.log(chat);
    return (
        <div>
            <Header/>
            <Steps/>
            <MainCarousel />
            <div className={'container pt-5 pb-5 text-center'}>
                <div className={'row'}>
                    <div className={'col-lg-6'}>
                        <h2>¿Sigues pensándolo?</h2>
                        <p>
                            Organiza el mejor intercambio de tu vida en solo 10 minutos
                        </p>
                    </div>
                    <div className={'col-lg-6'}>
                        <button className={'second-cta-button'}>
                            Organizar mi intercambio
                        </button>
                    </div>
                </div>
            </div>
            <div className={'container-fluid'}>
                <div className={'row footer'}>
                    <div className={'col-3'}>
                        Intercambiapp
                    </div>
                    <div className={'col-12'} style={{ fontSize: '0.7em' }}>
                        Todos los derechos reservados
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
