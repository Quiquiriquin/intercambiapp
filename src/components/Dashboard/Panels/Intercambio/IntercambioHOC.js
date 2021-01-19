import React, { useEffect, useState, useContext } from 'react';
import Intercambio from './Intercambio';
import './Intercambio.css';
import {useStep} from 'react-hooks-helper';
import {useForm} from 'react-hook-form';
import {CATEGORIES, NEW_EXCHANGE} from '../../../../Utils/Endpoints';
import {toast} from 'react-toastify';
import { useHistory } from 'react-router-dom';
import {GeneralContext} from '../../../../context/GeneralContext';

const IntercambioHoc = () => {
  const { updateLoading } = useContext(GeneralContext);
  const history = useHistory();
  const steps = [
    { id: 'Basics' },
    { id: 'Invites' },
    { id: 'Review' },
  ];
  const [exchangeInfo, setExchangeInfo] = useState(null);
  const [invites, setInvites] = useState(null);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  const [options, setOptions] = useState(null);
  const { control, errors, handleSubmit, formState: { isValid } } = useForm({
    mode: 'all',
  });
  useEffect(() => {

    const getCategories = async () => {
      try {
        const { data } = await CATEGORIES();
        setOptions(data.categories);
      } catch (e) {
        console.log(e);
      }
    };

    if (options === null) {
      getCategories();
    }

  }, [options]);

  const onSubmitForm = async (data) => {
    if (id === 'Basics') {
      console.log(data);
      setExchangeInfo(data);
      console.log('Basicos');
      navigation.next();
    }
    if (id === 'Invites') {
      const names = [];
      const emails = [];
      Object.keys(data).map((elem, index) => {
        if (elem.includes('name')) {
          names.push(data[elem]);
        }
        if (elem.includes('email')) {
          emails.push(data[elem]);
        }
      });
      setInvites({
        names, emails,
      });
      navigation.next();
    }
    if (id === 'Review') {
      try {
        console.log(exchangeInfo);
        console.log(exchangeInfo.reservationLimit.format('YYYY-MM-DD'));
        exchangeInfo.date = exchangeInfo.date.format('YYYY-MM-DD');
        exchangeInfo.reservationLimit = exchangeInfo.reservationLimit.format('YYYY-MM-DD');
        updateLoading(true);
        await NEW_EXCHANGE({
          ...exchangeInfo,
          invitations: invites
        });
        updateLoading(false);
        toast.success('Intercambio creado correctamente')
        history.push('/dashboard');
      } catch (e) {
        updateLoading(false);
        console.log(e);
      }
    }

  };

  const inputProps = { navigation, children: options, control, errors};
  const generalProps = { handleSubmit, id, submitForm: onSubmitForm };
  return (
    <Intercambio infoProps={{ exchangeInfo, invites }} generalProps={generalProps} inputProps={inputProps}/>
  );
};

export default IntercambioHoc;
