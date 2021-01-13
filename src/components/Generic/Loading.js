import React from 'react';
import Lotties from './Lotties';
import loading from '../../assets/imgs/lotties/loading.json';
const Loading = () => {
  return (
    <div className={'loading-container'}>
      <div className={'d-flex align-content-center align-items-center'} style={{ height: '90vh' }}>
        <div className={'d-inline'} style={{ margin: '0 auto' }}>
          <Lotties
            animationData={loading}
            width={'50%'}
            height={'50%'}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
