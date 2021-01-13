import React from 'react';
import Lotties from '../Generic/Lotties';
import chat from '../../assets/imgs/lotties/chat_organiza.json';
import invita from '../../assets/imgs/lotties/invita.json';
import regalo from '../../assets/imgs/lotties/regalo.json';

const Steps = () => {
    return (
        <div className={'container-fluid text-center mt-5 mb-5'}>
            <h2>¿Cómo planear mi intercambio?</h2>
            <div className={'row gx-4 mt-5'}>
                <div className={'col-lg-4 col-sm-12 col-md-12'}>
                    <div className={'lottie-container'}>
                        <Lotties
                            animationData={chat}
                            height={'40%'}
                            width={'40%'}
                        />
                    </div>
                    <div className={'steps-title'}>
                        Organiza
                    </div>
                    <div className={'steps-desc'}>
                        Envía un mensaje a quienes quieras y hazlos formar parte de tu intercambio
                    </div>
                </div>
                <div className={'col-lg-4 col-sm-12 col-md-12'}>
                    <div className={'lottie-container'}>
                        <Lotties
                            animationData={invita}
                            height={'70%'}
                            width={'70%'}
                        />
                    </div>
                    <div className={'steps-title'}>
                        Acepta la invitación
                    </div>
                    <div className={'steps-desc'}>
                        Tus amigos te invitarán por correo electrónico.
                    </div>
                </div>
                <div className={'col-lg-4 col-sm-12 col-md-12'}>
                    <div className={'lottie-container'}>
                        <Lotties
                            animationData={regalo}
                            height={'50%'}
                            width={'50%'}
                        />
                    </div>
                    <div className={'steps-title'}>
                        ¡Abre tu regalo!
                    </div>
                    <div className={'steps-desc'}>
                        Tu regalo será entregado en tu casa.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;
