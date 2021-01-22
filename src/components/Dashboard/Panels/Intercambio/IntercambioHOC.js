import React, { useEffect, useState, useContext } from 'react';
import Intercambio from './Intercambio';
import './Intercambio.css';
import {useStep} from 'react-hooks-helper';
import {useForm} from 'react-hook-form';
import {CATEGORIES, FRIENDS, NEW_EXCHANGE} from '../../../../Utils/Endpoints';
import {toast} from 'react-toastify';
import { useHistory } from 'react-router-dom';
import {GeneralContext} from '../../../../context/GeneralContext';

const IntercambioHoc = () => {
  const { updateLoading, user } = useContext(GeneralContext);
  const history = useHistory();
  const steps = [
    { id: 'Basics' },
    { id: 'Invites' },
    { id: 'Review' },
  ];
  const [exchangeInfo, setExchangeInfo] = useState(null);
  const [friends, setFriends] = useState(null);
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
      const { pastFriends, ...users } = data;
      console.log(users);
      Object.keys(users).forEach((elem, index) => {
        if (elem !== 'pastFriends') {
          if (elem.includes('name')) {
            names.push(data[elem]);
          }
          if (elem.includes('email')) {
            emails.push(data[elem]);
          }
        }
      });
      if (pastFriends) {
        pastFriends.forEach((elem) => {
          const index = friends.findIndex((element) => element.email === elem);
          names.push(friends[index].name);
          emails.push(friends[index].email);
        });
      }
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

  useEffect(() => {
    const getFriends = async () => {
      try {
        // const ids = exchanges.map((elem) => elem.idUser);
        const { data } = await FRIENDS(user.id);
        setFriends(data.invitations);
        //setCategories(data.categories);
        updateLoading(false);
      } catch (e) {
        console.log(e);
        updateLoading(false);
        toast.error('Error al obtener tus intercambios. Intenta de nuevo.');
      }
    };
    if (friends === null) {
      updateLoading(true);
      getFriends();
    }
  }, [friends]);

  const inputProps = { navigation, children: options, control, errors};
  const generalProps = { handleSubmit, id, submitForm: onSubmitForm };
  return (
    <Intercambio infoProps={{ exchangeInfo, invites }} generalProps={generalProps} inputProps={inputProps} friends={friends}/>
  );
};

export default IntercambioHoc;
