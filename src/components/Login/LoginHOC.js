import React, { useContext } from 'react';
import Login from './Login';
import {useForm} from 'react-hook-form';
import {LOGIN} from '../../Utils/Endpoints';
import { useHistory } from 'react-router-dom';
import {GeneralContext} from '../../context/GeneralContext';

const LoginHoc = () => {
    const { updateUser } = useContext(GeneralContext);
    const history = useHistory();
    const rules = {
        email: {
            required: 'Ingresa tu correo',
        },
        password: {
            required: 'Ingresa una contraseña',
        }
    };

    const { handleSubmit, control, errors, formState: { isValid } } = useForm({
        mode: 'all',
    });
    const submitForm = async (data) => {
        try {
            const response = await LOGIN(data);
            if (response) {
                const { data } = response;
                if (data.usuario) {
                    updateUser(data.usuario);
                    history.push('/dashboard');
                    console.log('Hay sesión');
                }
            }
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <Login
            rules={rules}
            handleSubmit={handleSubmit}
            control={control}
            errors={errors}
            isValid={isValid}
            submitFunction={submitForm}
        />
    );
};

export default LoginHoc;
