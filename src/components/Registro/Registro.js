import React from 'react';
import GenericInput from '../Generic/GenericInput';

const Registro = ({ handleSubmit, submitFunction, control, rules, errors, isValid }) => {
    console.log(errors);
    return (
        <div className={'container-fluid full-height gray-bg'}>
            <div className={'d-flex align-items-center align-content-center'} style={{ height: '92vh' }}>
                <div className={'register-card white-bg'}>
                    <div className={'text-center fz-24 fw-400'}>
                        Regístrate
                    </div>
                    <form onSubmit={handleSubmit(submitFunction)}>
                        <GenericInput
                            errors={errors}
                            defaultValue={null}
                            control={control}
                            rules={rules.name}
                            name={'name'}
                            label={'Nombre'}
                            placeholder={'Juan'}
                            />
                        <GenericInput
                            errors={errors}
                            defaultValue={null}
                            control={control}
                            rules={rules.lastname}
                            name={'lastname'}
                            label={'Apellido'}
                            placeholder={'Pérez'}
                        />
                        <GenericInput
                            errors={errors}
                            defaultValue={null}
                            control={control}
                            rules={rules.email}
                            name={'email'}
                            label={'Correo electrónico'}
                            placeholder={'juan.perez@example.com'}
                        />
                        <GenericInput
                            errors={errors}
                            defaultValue={null}
                            control={control}
                            rules={rules.password}
                            name={'password'}
                            label={'Contraseña'}
                            type={'password'}
                            placeholder={'Tu contraseña...'}
                        />
                        <div className={'mt-4'}>
                            <button type={'submit'} disabled={!isValid} className={'btn w-100' +
                            ' white-font' +
                            ' main-green'}>
                                Registrarme
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registro;
