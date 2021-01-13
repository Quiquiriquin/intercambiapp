import React from 'react';
import { Controller } from 'react-hook-form';
import { Input } from 'antd';

const GenericInput = ({ label, name, control, defaultValue, errors, rules, placeholder, type=null }) => {
    return (
        <div className={'mt-3'}>
            <label>{label}</label>
            <Controller
                name={name}
                rules={rules}
                control={control}
                defaultValue={defaultValue}
                as={
                    !type
                        ? <Input size={'large'} name={name} placeholder={placeholder}/>
                        : <Input.Password size={'large'} name={name} placeholder={placeholder}/>
                }
            />
            {
                (errors && errors[name]) &&
                    <label className={'error-label'}>{errors[name].message}</label>
            }
        </div>
    );
};

export default GenericInput;
