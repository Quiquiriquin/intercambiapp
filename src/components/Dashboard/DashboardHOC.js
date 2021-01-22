import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {GeneralContext} from '../../context/GeneralContext';
import Dashboard from './Dashboard';
import thinking from '../../assets/imgs/lotties/thinking.json';
import invite from '../../assets/imgs/lotties/invite-sec.json';
import wish from '../../assets/imgs/lotties/wish.json';
import './Dashboard.css';
import {toast} from 'react-toastify';
import {DELETE_EXCHANGE, EXCHANGES, FRIENDS} from '../../Utils/Endpoints';

const DashboardHoc = () => {
  const { user, updateLoading } = useContext(GeneralContext);
  const history = useHistory();
  const [exchanges, setExchanges] = useState(null);
  const [friends, setFriends] = useState(null);
  const [reload, setReload] = useState(false);
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    if (user) {
      console.log(user);
    } else {
      history.push('/login');
    }
  });

  useEffect(() => {

    const getExchanges = async () => {
      try {
        console.log('Buscando');
        const { data } = await EXCHANGES();
        setExchanges(data.exchanges);
        updateLoading(false);
      } catch (e) {
        console.log(e);
        updateLoading(false);
        toast.error('Error al obtener tus intercambios. Intenta de nuevo.');
      }
    };

    const getFriends = async () => {
      try {
        // const ids = exchanges.map((elem) => elem.idUser);
        const { data } = await FRIENDS(user.id);
        setFriends(data.invitations);
        setCategories(data.categories);
        updateLoading(false);
      } catch (e) {
        console.log(e);
        updateLoading(false);
        toast.error('Error al obtener tus intercambios. Intenta de nuevo.');
      }
    };

    if (!exchanges || reload) {
      updateLoading(true);
      getExchanges();
    }

    if((exchanges && !friends)) {
      updateLoading(true);
      getFriends();
    }

  }, [exchanges, reload]);

  console.log(exchanges);

  const cards = [
    {
      animation: thinking,
      title: 'Tus intercambios',
      text: '¿Aún no has planeado tu intercambio?',
      buttonTitle: 'Organízalo ahora',
      linkButton: 'dashboard/nuevo/intercambio',
    },
    {
      animation: invite,
      title: 'Tus amigos',
      text: 'Invita a tus amigos, entre más sean, mejor la pasarán',
      buttonTitle: 'Invitar amigos',
      linkButton: 'nuevo/intercambio',
    },
    {
      animation: wish,
      title: 'Tus deseos',
      text: 'Selecciona tus categorías favoritas para tu regalo',
      buttonTitle: 'Seleccionar',
      linkButton: 'nuevo/intercambio',
    },
  ];

  return (
    <Dashboard
      friends={friends && friends.length > 0 ? friends : null}
      categories={categories && categories.length > 0 ? categories : null}
      exchanges={exchanges && exchanges.length > 0 ? exchanges : null}
      cards={cards}

    />
  );
};

export default DashboardHoc;
