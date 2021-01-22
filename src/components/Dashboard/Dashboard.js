import React, { useContext, useEffect } from 'react';
import {GeneralContext} from '../../context/GeneralContext';
import DashboardCard from './DashboardCard';
import {useHistory} from 'react-router-dom';

const Dashboard = ({ cards, exchanges, friends, categories }) => {
  const { user, updateUser } = useContext(GeneralContext);
  const history = useHistory();

  useEffect(() => {
    if (!user && !localStorage.getItem('user')) {
      history.push('/login');
    }
    if (localStorage.getItem('user') && !user) {
      updateUser(JSON.parse(localStorage.getItem('user')));
      console.log();
    } else {
      console.log('No hay');
      console.log(history);
    }
  }, [user]);

  return (
    <div className={'mt-3 container-fluid pb-5'}>
      <div className={'text-center'}>
        <h1>¡Bienvenido { user ? user.name : '' }!</h1>
        <div className={'fz-18'}>
          Intercambiapp es la mejor aplicación <br /> para organizar un intercambio
        </div>
        <div className={'mt-3'}>
          <button onClick={() => history.push('/dashboard/nuevo/intercambio')} className={'action-btn main-green white-font'}>
            Nuevo intercambio
          </button>
        </div>
      </div>

      <div className={'mt-4'}>
        <div className={'row gx-5'}>
          {
            cards &&
              cards.map(({animation, title, text, buttonTitle, linkButton}, index) =>
                <DashboardCard
                  content={index === 0 ? exchanges : null}
                  key={index}
                  friends={index === 1 ? friends : null}
                  animation={animation}
                  title={title}
                  text={text}
                  categories={index === 2 ? categories : null}
                  button={buttonTitle}
                  linkButton={linkButton}
                />)
          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
