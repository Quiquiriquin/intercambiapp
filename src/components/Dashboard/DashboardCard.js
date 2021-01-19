import React from 'react';
import Lotties from '../Generic/Lotties';
import {Link} from 'react-router-dom';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

const DashboardCard = ({ title, animation, button, text, linkButton, content, friends, categories}) => {
  const history = useHistory();
  return (
    <div className={'col-lg-4 col-sm-12 mt-3'}>
      <div className={'content-info-card'}>
        <div className={'card-info-title fz-24'}>
          { title }
        </div>
        {
          (!content && !friends && !categories) &&
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
                <Link to={linkButton}>
                  <button className={'mt-3 action-sec-btn main-green white-font'}>
                    { button }
                  </button>
                </Link>
              </div>
            </div>
        }
        {
          (content && content.length) > 0 &&
            content.map((elem, index) => (
              <div key={index} className={'mt-2 d-flex justify-content-between'}>
                <div className={'fz-18'}>
                  { elem.name }
                </div>
                <div className={''}>
                  <Button onClick={() => history.push(`/dashboard/intercambio/${elem.id}`)} size={'small'} className={'text-white' +
                  ' main-green' +
                  ' view-button'}>
                    Ver
                  </Button>
                </div>
              </div>
            ))
        }
        {
          (friends && friends.length > 0) &&
            friends.map((friend, index) => (
              <div key={index} className={'mt-2 d-flex'}>
                <div className={'name-circle'}>
                  { friend.name.slice(0, 2) }
                </div>
                <div className={'fz-18'}>
                  { friend.name }
                </div>
                {/*<div className={''}>*/}
                {/*  <Button onClick={() => console.log(elem.id)} size={'small'} className={'text-white' +*/}
                {/*  ' main-green' +*/}
                {/*  ' view-button'}>*/}
                {/*    Ver*/}
                {/*  </Button>*/}
                {/*</div>*/}
              </div>
            ))
        }

        {
          (categories && categories.length > 0) &&
          categories.map((cat, index) => (
            <div key={index} className={'mt-2 d-flex'}>
              <div className={'fz-18'}>
                { cat }
              </div>
              {/*<div className={''}>*/}
              {/*  <Button onClick={() => console.log(elem.id)} size={'small'} className={'text-white' +*/}
              {/*  ' main-green' +*/}
              {/*  ' view-button'}>*/}
              {/*    Ver*/}
              {/*  </Button>*/}
              {/*</div>*/}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default DashboardCard;
