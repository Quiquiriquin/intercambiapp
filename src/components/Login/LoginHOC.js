import React, { useContext } from 'react';
import Login from './Login';
import {useForm} from 'react-hook-form';
import {LOGIN} from '../../Utils/Endpoints';
import { useHistory } from 'react-router-dom';
import {GeneralContext} from '../../context/GeneralContext';
import {toast} from 'react-toastify';

const LoginHoc = () => {
    const { updateUser, updateLoading } = useContext(GeneralContext);
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
        updateLoading(true);
        try {
            const response = await LOGIN(data);
            if (response && response.status === 200) {
                const { data } = response;
                if (data.usuario) {
                    localStorage.setItem('user', JSON.stringify(data.usuario));
                    updateUser(data.usuario);
                    history.push('/dashboard');
                    console.log('Hay sesión');
                }
            } else {
                toast.error('Usuario o contraseña inválidos');
            }
            updateLoading(false);
        } catch (e) {
            console.log(e);
            updateLoading(true);
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
