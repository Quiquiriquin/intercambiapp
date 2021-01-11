import React from 'react';
import Registro from './Registro';
import { useForm } from 'react-hook-form';
import './Registro.css';
import {SIGNUP} from '../../Utils/Endpoints';
import { useHistory } from 'react-router-dom';

const RegistroHoc = () => {
    const history = useHistory();
    const rules = {
        name: {
            required: 'Ingresa tu nombre',
        },
        lastname: {
            required: 'Ingresa tu apellido',
        },
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
            const response = await SIGNUP(data);
            if (response) {
                const { data } = response;
                if (data.usuario) {
                    history.push('/login');
                }
            }
        } catch (e) {
            console.log(e);
        }
        console.log(data);
    };
    return (
        <div>
            <Registro
                handleSubmit={handleSubmit}
                submitFunction={submitForm}
                control={control}
                rules={rules}
                errors={errors}
                isValid={isValid}
            />
        </div>
    );
};

export default RegistroHoc;
