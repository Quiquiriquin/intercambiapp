import React, { useState } from 'react';
import GenericInput from '../../../../Generic/GenericInput';
import {Button} from 'antd';
import { UserAddOutlined } from '@ant-design/icons';


const Invites = ({ navigation, children, control, errors }) => {

  const [inputs, setInputs] = useState([{ name: '', email: '' }]);
  const { next } = navigation;

  const addInput = async () => {
    setInputs((prev) => [...prev, { name: '', email: '' }])
  };

  return (
    <div className={'container-fluid mt-4 black-font pb-4 form-container'}>
      <div className={'fz-24 bold fw-700'}>
        Invita a tus amigos
      </div>
      <div className={'gray-font'}>
        Ya tenemos casi todo preparado para tu intercambio. ¡Solo faltan tus amigos! <br /> Añade su dirección de correo electrónico y nombre para que puedan participar.
      </div>
      <div className={''}>
          <div className={'row'}>
              {
                inputs.map((input, index) => (
                  <div className={'col-12'} key={index}>
                    <div className={'row'}>
                      <div className={'col-6'}>
                        <GenericInput
                          errors={errors}
                          control={control}
                          defaultValue={input.name}
                          label={index > 0 ? null : 'Nombre'}
                          placeholder={''}
                          name={`user-name-${index}`}
                          customClass={'step-class-input'}
                          labelClass={'sec-input-label'}
                        />
                      </div>

                      <div className={'col-6'}>
                        <GenericInput
                          errors={errors}
                          defaultValue={input.email}
                          label={index > 0 ? null : 'Correo electrónico'}
                          placeholder={''}
                          name={`user-email-${index}`}
                          customClass={'step-class-input'}
                          labelClass={'sec-input-label'}
                          control={control}
                        />
                      </div>
                    </div>

                    </div>

                ))
              }
              <div className={'mt-3 text-center'}>
                <Button onClick={addInput} className={'signup-button'} size={'large'} icon={<UserAddOutlined/>}>
                  Agregar amigo
                </Button>
              </div>
          </div>
          <div className={'mt-5'}>
            <Button htmlType={'submit'} size={'large'} className={'main-green' +
            ' white-font' +
            ' w-100'} style={{ borderRadius: '5px', borderColor: 'teal' }}>
              Siguiente
            </Button>
          </div>
      </div>
    </div>
  );
};

export default Invites;
