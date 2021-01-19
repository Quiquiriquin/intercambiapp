import React from 'react';
import GenericInput from '../../../../Generic/GenericInput';
import { Select, Button } from 'antd';

const Option = Select.Option;

const BasicInfo = ({ errors, navigation, children, control, handleSubmit, submitForm }) => {
  const { next } = navigation;
  console.log(control);
  return (
    <div className={'container-fluid mt-4 black-font pb-4 form-container'}>
      <div className={'fz-24 bold fw-700'}>
        Información del evento
      </div>
      <div className={'gray-font'}>
        ¡Tranquilo! Podrás revisar toda la información antes de enviar las invitaciones
      </div>
      <div className={''}>
        {/*<form onSubmit={handleSubmit(submitForm)}>*/}
          <GenericInput
            label={'Nombre del intercambio'}
            placeholder={'Intercambio asombroso'}
            name={'name'}
            customClass={'step-class-input'}
            labelClass={'main-input-label'}
            control={control}
            errors={errors}
          />
          <div className={'mt-5'}>
            <GenericInput
              label={'Fecha del intercambio'}
              name={'date'}
              customClass={'step-class-input label-contain w-100'}
              labelClass={'sec-input-label gray-font'}
              type={'date'}
              control={control}
              errors={errors}
            />
            <GenericInput
              label={'Fecha límite de confirmación'}
              name={'reservationLimit'}
              customClass={'step-class-input label-contain w-100'}
              labelClass={'sec-input-label gray-font'}
              type={'date'}
              errors={errors}
              control={control}
            />
          </div>
      {/*    <div className={'mt-5'}>*/}
      {/*      <GenericInput*/}
      {/*  name={'participate'}*/}
      {/*  customClass={'d-flex flex-column fz-18'}*/}
      {/*  type={'radio'}*/}
      {/*  labelClass={'main-input-label'}*/}
      {/*  optionClass={'fz-18'}*/}
      {/*  label={'¿Participarás en el intercambio?'}*/}
      {/*  onChange={setForm}/>*/}
      {/*</div>*/}
          <div className={'mt-5'}>
            <GenericInput
              name={'budget'}
              defaultValue={250}
              type={'currency'}
              labelClass={'main-input-label'}
              customClass={'step-class-input w-100'}
              label={'Establece el presupuesto'}
              errors={errors}
              control={control}/>
          </div>
          <div className={'mt-5'}>
            <GenericInput
              control={control}
              name={'category'}
              type={'select'}
              placeholder={'¿Qué regalos serán permitidos?'}
              labelClass={'main-input-label'}
              customClass={'step-class-input w-100'}
              label={'Categoría de regalos'}
              errors={errors}
              children={
                children ?
                  children.map((option, index) => (
                    <Option value={option.id} key={index}>
                      { option.name }
                    </Option>
                  ))
                  : []
              }
            />
          </div>
          <div className={'mt-5'}>
            <GenericInput
              name={'observations'}
              control={control}
              type={'area'}
              errors={errors}
              placeholder={'Añade los información adicional...'}
              labelClass={'main-input-label'}
              customClass={'step-class-input w-100'}
              label={'Comentarios adicionales'} />
          </div>
          <div className={'mt-5'}>
            <Button htmlType={'submit'} size={'large'} className={'main-green' +
            ' white-font' +
            ' w-100'} style={{ borderRadius: '5px', borderColor: 'teal' }}>
              Siguiente
            </Button>
          </div>
        {/*</form>*/}
      </div>
    </div>
  );
};

export default BasicInfo;
