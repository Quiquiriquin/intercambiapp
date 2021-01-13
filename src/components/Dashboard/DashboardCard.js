import React from 'react';
import Lotties from '../Generic/Lotties';

const DashboardCard = ({ title, animation, button, text }) => {
  return (
    <div className={'col-lg-4 col-sm-12 mt-3'}>
      <div className={'content-info-card'}>
        <div className={'card-info-title fz-24'}>
          { title }
        </div>
        <div className={'mt-2'}>
          <Lotties
            animationData={animation}
            height={'40%'}
            width={'40%'}
          />
          <div className={'fz-18 text-center mt-3 card-text'}>
            { text }
          </div>
          <div className={'text-center mb-3'}>
            <button className={'mt-3 action-sec-btn main-green white-font'}>
              { button }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
