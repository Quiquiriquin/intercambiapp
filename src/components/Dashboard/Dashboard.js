import React, { useContext } from 'react';
import {GeneralContext} from '../../context/GeneralContext';
import Lotties from '../Generic/Lotties';
import thinking from '../../assets/imgs/lotties/thinking.json';
import DashboardCard from './DashboardCard';

const Dashboard = ({ cards }) => {
  const { user } = useContext(GeneralContext);
  return (
    <div className={'mt-3 container-fluid pb-5'}>
      <div className={'text-center'}>
        <h1>¡Bienvenido { user ? user.name : '' }!</h1>
        <div className={'fz-18'}>
          Intercambiapp es la mejor aplicación <br /> para organizar un intercambio
        </div>
        <div className={'mt-3'}>
          <button className={'action-btn main-green white-font'}>
            Nuevo intercambio
          </button>
        </div>
      </div>

      <div className={'mt-4'}>
        <div className={'row gx-5'}>
          {
            cards &&
              cards.map(({animation, title, text, buttonTitle}, index) =>
                <DashboardCard
                  key={index}
                  animation={animation}
                  title={title}
                  text={text}
                  button={buttonTitle}
                />)
          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
