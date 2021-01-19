import React from 'react';
import { Controller } from 'react-hook-form';
import { Input, DatePicker, Radio, InputNumber, Select, Checkbox } from 'antd';

const RadioGroup = Radio.Group;

const GenericInput = ({ label, name, control, defaultValue, errors, rules, placeholder, type=null, customClass, labelClass, optionClass, children, onChange }) => {
    const InputArea = (
      <Input.TextArea rows={4} className={`${customClass}`} size={'large'} name={name} placeholder={placeholder}/>
    );

    const InputDate = (
      <DatePicker className={`${customClass}`} size={'large'} name={name} placeholder={placeholder}/>
    );

    const RadioInput = (
      <Checkbox name={name}>Sí, participaré en el intercambio</Checkbox>
    );

    const InputCurrency = (
      <InputNumber
        className={`${customClass}`} size={'large'} name={name} placeholder={placeholder}
        defaultValue={defaultValue}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
      />
    );

    const InputSelect = (
      <Select
        mode={'multiple'}
        allowClear
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`${customClass}`}
        size={'large'}
        name={name}
      >
        { children }
      </Select>
    );

    const InputComponent = () => {
      switch (type) {
        case 'area':
          return (InputArea);
        case 'date':
          return (InputDate);
        case 'radio':
          return (RadioInput);
        case 'currency':
          return (InputCurrency);
        case 'select':
          return (InputSelect);
        case 'password':
          return (<Input.Password size={'large'} name={name} placeholder={placeholder}/>);
        default:
          return (<Input size={'large'} name={name} placeholder={placeholder}/>);
      }
    };

    return (
        <div className={`${label ? 'mt-3' : ''}`}>
            <label className={`${labelClass}`}>{label}</label>

              <Controller
                name={name}
                rules={rules}
                control={control}
                defaultValue={defaultValue}
                as={
                  type === 'password' ?
                    <Input.Password
                      size={'large'}
                      name={name}
                      placeholder={placeholder}/>
                      : type === 'date'
                      ? <DatePicker
                        className={`${customClass}`} size={'large'}
                        name={name} placeholder={placeholder}/>
                        : type === 'select'
                    ? <Select
                        mode={'multiple'}
                        allowClear
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        className={`${customClass}`}
                        size={'large'}
                        name={name}
                      >
                        { children }
                      </Select>
                      : type === 'area'
                      ? <Input.TextArea rows={4} className={`${customClass}`} size={'large'} name={name} placeholder={placeholder}/>
                      : type === 'radio'
                          ? <Checkbox name={name}>Sí, participaré en el intercambio</Checkbox>
                          : type === 'currency'
                          ? <InputNumber
                              className={`${customClass}`} size={'large'} name={name} placeholder={placeholder}
                              defaultValue={defaultValue}
                              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                              parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            />
                            : <Input
                              size={'large'}
                              name={name}
                              placeholder={placeholder}/>







                }
              />
          {
            control && (errors && errors[name]) &&
              <label className={'error-label'}>{errors[name].message}</label>

          }
        </div>
    );
};

export default GenericInput;
