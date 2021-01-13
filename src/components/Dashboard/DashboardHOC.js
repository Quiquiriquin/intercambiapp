import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {GeneralContext} from '../../context/GeneralContext';
import Dashboard from './Dashboard';
import thinking from '../../assets/imgs/lotties/thinking.json';
import invite from '../../assets/imgs/lotties/invite-sec.json';
import wish from '../../assets/imgs/lotties/wish.json';
import './Dashboard.css';

const DashboardHoc = () => {
  const { user } = useContext(GeneralContext);
  const history = useHistory();
  useEffect(() => {
    if (user) {
      console.log(user);
    } else {
      history.push('/login');
    }
  })

  const cards = [
    {
      animation: thinking,
      title: 'Tus intercambios',
      text: '¿Aún no has planeado tu intercambio?',
      buttonTitle: 'Organízalo ahora',
    },
    {
      animation: invite,
      title: 'Tus amigos',
      text: 'Invita a tus amigos, entre más sean, mejor la pasarán',
      buttonTitle: 'Invitar amigos',
    },
    {
      animation: wish,
      title: 'Tus deseos',
      text: 'Selecciona tus categorías favoritas para tu regalo',
      buttonTitle: 'Seleccionar',
    },
  ]

  return (
    <Dashboard
      cards={cards}
    />
  );
};

export default DashboardHoc;
