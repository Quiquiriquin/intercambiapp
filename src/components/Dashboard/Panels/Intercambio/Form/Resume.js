import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import DetalleIntercambio from '../../DetalleIntercambio/DetalleIntercambio';

const Resume = ({ exchangeInfo, invites }) => {
  const [exchange, setEchange] = useState(null);

  console.log(exchangeInfo);
  console.log(invites);

  useEffect(() => {
    if (!exchange) {
      const { category, ...info } = exchangeInfo;
      const Invitations = [];
      const Categories = [];
      invites.names.forEach((name, index) => {
        Invitations.push({
          name,
          email: invites.emails[index],
        });
      });
      category.forEach((cat) => {
        Categories.push({
          name: cat,
        });
      });
      console.log(Categories);
      console.log(Invitations);
      console.log(info);
      setEchange({
        Categories,
        Invitations,
        ...info
      })
      console.log('No hay, hay que construir el objeto');
    }
  }, [exchange]);

  return (
    <div className={'container-fluid'}>
      <div className={'fz-32'}>
        Resumen
      </div>
      <div className={'gray-font'}>
        Casi esta listo todo. Revisa que los detalles sean correctos.
      </div>
      <DetalleIntercambio resume={true} exchange={exchange} />
      <div className={'fz-18 mt-5 text-center mx-auto w-50'}>
        ¿Todo esta correcto? <br /> Da click en el botón de abajo y que comience la diversión
      </div>
      <div className={'mt-5'}>
        <Button className={'main-green' +
        ' white-font' +
        ' w-100'} htmlType={'submit'} size={'large'}>
          Crear
        </Button>
      </div>
    </div>
  );
};

export default Resume;
