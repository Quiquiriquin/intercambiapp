import React from 'react';
import GenericInput from '../Generic/GenericInput';
import {Button} from 'antd';
import DetalleIntercambio from '../Dashboard/Panels/DetalleIntercambio/DetalleIntercambio';

const Invitaciones = ({ control, errors, exchange, handleSubmit, onSubmitFunction, allow, confirmRsvp, already }) => {
  console.log(confirmRsvp, allow, already);
  return (
    <div className={'container-fluid mt-3'}>
      <h1>Invitaciones</h1>
      <div className={''}>
        Aquí podrás ingresar el código de intercambio y tu correo, para revisar los detalles del intercambio
      </div>
      {
        !exchange &&
        <div className={''}>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <GenericInput
              name={'email'}
              labelClass={''}
              customClass={'step-class-input w-100'}
              label={'Correo electrónico'}
              errors={errors}
              control={control}/>
            <GenericInput
              name={'key'}
              labelClass={''}
              customClass={'step-class-input w-100'}
              label={'Clave del intercambio'}
              errors={errors}
              control={control}/>
            <div className={'mt-4'}>
              <Button htmlType={'submit'} size={'large'} className={'main-green' +
              ' white-font' +
              ' w-100'} style={{ borderRadius: '5px', borderColor: 'teal' }}>
                Buscar intercambio
              </Button>
            </div>
          </form>
        </div>
      }
      {
        allow && !already &&
          <div className={'mt-3 mb-3'}>
            <h3>¡Confirma tu asistencia!</h3>
            <div className={'row gx-5'}>
              <div className={'col-6'}>
                <Button onClick={() => confirmRsvp()} size={'large'} className={'accept-button'}>
                  Participar
                </Button>
              </div>
            </div>
          </div>
      }
      {
        already &&
          <div className={'mt-3 mb-3'}>
            <h3>Ya has confirmado tu asistencia</h3>
            <div className={''}>
              Revisa los detalles del intercambio
            </div>
          </div>
      }
      {
        exchange &&
          <DetalleIntercambio exchange={exchange} invite={true} pairs={exchange.Pairs} />
      }
    </div>
  );
};

export default Invitaciones;
