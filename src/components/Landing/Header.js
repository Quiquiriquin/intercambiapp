import React from 'react';

const Header = () => {
    return (
        <div className={'header-container bold'}>
            <div className={'header-text-container white-font'}>
                <h1 className={'text-shadow bold fw-900'}>Únete a tu familia y amigos</h1>
                <div className={'sec-header text-shadow fz-24'}>
                    La mejor aplicación para organizar tus intercambios
                </div>
                <div className={''}>
                    <button className={'cta-button main-green white-font hover-pointer'}>
                        Organizar mi intercambio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
