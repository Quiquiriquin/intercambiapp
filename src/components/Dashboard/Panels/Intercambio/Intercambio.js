import React from 'react';
import BasicInfo from './Form/BasicInfo';
import Invites from './Form/Invites';
import Resume from './Form/Resume';

const Intercambio = ({ generalProps: { handleSubmit, id, submitForm }, inputProps, infoProps, friends }) => {
  return (
    <div>

      <form onSubmit={handleSubmit(submitForm)}>
        {
          id === 'Basics' &&
            <BasicInfo {...inputProps} handleSubmit={handleSubmit} submitForm={submitForm}  />
        }
        {
          id === 'Invites' &&
            <Invites {...inputProps} friends={friends} />
        }
        {
          id === 'Review' &&
            <Resume {...inputProps} {...infoProps} />
        }
      </form>
    </div>
  )
};

export default Intercambio;
