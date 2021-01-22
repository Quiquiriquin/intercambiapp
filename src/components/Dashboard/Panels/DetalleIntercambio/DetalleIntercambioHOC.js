import React, { useState, useContext, useEffect } from 'react';
import './DetalleIntercambio.css';
import DetalleIntercambio from './DetalleIntercambio';
import {DELETE_EXCHANGE, EXCHANGE, GET_PAIRS} from '../../../../Utils/Endpoints';
import { useParams, useHistory } from 'react-router-dom';
import {GeneralContext} from '../../../../context/GeneralContext';
import {toast} from 'react-toastify';
const DetalleIntercambioHoc = () => {
  const history = useHistory();
  const { id: idExchange } = useParams();
  const { loading, updateLoading } = useContext(GeneralContext);
  const [exchange, setExchange] = useState(null);
  const [pairs, setPairs] = useState(null);

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

    const getPairs = async () => {
      try {
        const { data } = await GET_PAIRS(idExchange);
        setPairs(data.pairs);
        updateLoading(false);
      } catch (e) {
        updateLoading(false);
        console.log(e);
      }
    };

    if (!pairs) {
      updateLoading(true);
      getPairs();
    }

    if (!exchange) {
      updateLoading(true);
      getExchange();
    }
  });

  const deleteExchange = async (id) => {
    try {
      await DELETE_EXCHANGE(id);
      history.push('/dashboard');
      toast.success('Intercambio eliminado')
    } catch (e) {
      toast.error('Ha ocurrido un error al intentar borrar el intercambio');
    }
  };


  return (
    <DetalleIntercambio
      loading={loading}
      exchange={exchange}
      pairs={pairs}
      deleteFunction={deleteExchange}
    />
  );
};

export default DetalleIntercambioHoc;
