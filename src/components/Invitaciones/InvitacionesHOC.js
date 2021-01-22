import React, { useState, useEffect, useContext } from 'react';
import Invitaciones from './Invitaciones';
import './Invitaciones.css';
import {useForm} from 'react-hook-form';
import {ACCEPT, FIND_EXCHANGE} from '../../Utils/Endpoints';
import moment from 'moment';
import {toast} from 'react-toastify';
import {GeneralContext} from '../../context/GeneralContext';


const InvitacionesHoc = () => {
  const { updateLoading } = useContext(GeneralContext);
  const [exchange, setExchange] = useState(null);
  const [email, setEmail] = useState(null);
  const [allowRsvp, setAllowRsvp] = useState(null);
  const [alreadyRsvp, setAlreadyRsvp] = useState(null);

  const { control, handleSubmit } = useForm({
    mode: 'all'
  });

  useEffect(() => {
    const getExchange = async () => {

    };
    if (!exchange) {
      getExchange();
    }
  }, [exchange]);

  const submitForm = async (data) => {
    console.log(data);
    updateLoading(true);
    try {
      const { key, email } = data;
      const { data: { exchange } } = await FIND_EXCHANGE(key, email);
      console.log(new Date(exchange.reservationLimit));
      console.log(new Date());
      if (moment(new Date(exchange.reservationLimit).setHours(23, 59, 59, 59)).add(1, 'day') > moment(new Date()) ) {
        setAllowRsvp(true);
      }
      console.log(exchange.Invitations);
      for (let invitation of exchange.Invitations) {
        if(invitation.email === email && invitation.confirmed === true) {
          setAllowRsvp(false);
          setAlreadyRsvp(true);
        }
      }
      console.log(allowRsvp);
      setExchange(exchange);
      setEmail(email);
      updateLoading(false);
    } catch (e) {
      console.log(e);
      updateLoading(false);
    }
  };

  const confirm = async () => {
    try {
      updateLoading(true);
      const ans = await ACCEPT(exchange.key, email);
      if (ans.data.confirmed) {
        toast.success('Yaaay 😁 Gracias por confirmar tu asistencia');
      }
      submitForm({
        key: exchange.key, email,
      });
      console.log(ans);
      updateLoading(false);
    } catch (e) {
      updateLoading(false);
      toast.error('Ha ocurrido un error. Intenta de nuevo más tarde')
    }
  };
  return (
    <Invitaciones already={alreadyRsvp} confirmRsvp={confirm} allow={allowRsvp} exchange={exchange} control={control} handleSubmit={handleSubmit} onSubmitFunction={submitForm}/>
  );
};

export default InvitacionesHoc;
