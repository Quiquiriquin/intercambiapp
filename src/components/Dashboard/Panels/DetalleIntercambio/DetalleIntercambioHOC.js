import React, { useState, useContext, useEffect } from 'react';
import './DetalleIntercambio.css';
import DetalleIntercambio from './DetalleIntercambio';
import {EXCHANGE} from '../../../../Utils/Endpoints';
import { useParams } from 'react-router-dom';
import {GeneralContext} from '../../../../context/GeneralContext';
const DetalleIntercambioHoc = () => {

  const { id: idExchange } = useParams();
  const { loading, updateLoading } = useContext(GeneralContext);
  const [exchange, setExchange] = useState(null);

  useEffect(() => {

    const getExchange = async () => {
      try {
        const { data } = await EXCHANGE(idExchange);
        setExchange(data.exchange);
        updateLoading(false);
      } catch (e) {
        console.log(e);
        updateLoading(false);
      }
    };

    if (!exchange) {
      updateLoading(true);
      getExchange();
    }
  });

  return (
    <DetalleIntercambio
      loading={loading}
      exchange={exchange}
    />
  );
};

export default DetalleIntercambioHoc;
