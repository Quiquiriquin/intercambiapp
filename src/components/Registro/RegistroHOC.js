import React from 'react';
import Registro from './Registro';
import { useForm } from 'react-hook-form';
import './Registro.css';

const RegistroHoc = () => {

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
