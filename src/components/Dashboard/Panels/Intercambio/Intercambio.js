import React, { useState, useEffect } from 'react';
// import {useForm} from 'react-hook-form';
import {useStep} from 'react-hooks-helper';
import BasicInfo from './Form/BasicInfo';
import {CATEGORIES} from '../../../../Utils/Endpoints';
import Invites from './Form/Invites';
import Resume from './Form/Resume';
import { useForm } from 'react-hook-form';

const Intercambio = ({ generalProps: { handleSubmit, id, submitForm }, inputProps, infoProps }) => {
  // const [formData, setForm] = useForm({
  //   name: '',
  //   date: '',
  //   reservationLimit: '',
  //   budget: 50,
  //   observations: '',
  // });
  return (
    <div>

      <form onSubmit={handleSubmit(submitForm)}>
        {
          id === 'Basics' &&
            <BasicInfo {...inputProps} handleSubmit={handleSubmit} submitForm={submitForm}  />
        }
        {
          id === 'Invites' &&
            <Invites {...inputProps} />
        }
        {
          id === 'Review' &&
            <Resume {...inputProps} {...infoProps} />
        }
      </form>
    </div>
  )
};

export default Intercambio;
