import Axios from 'axios';

const headers = {
  'authorization': sessionStorage.getItem('authorization'),
  'x-refresh-token': sessionStorage.getItem('x-refresh-token'),
  'Access-Control-Allow-Origin': '*',
};

console.log(headers);

export const SIGNUP = async (data) => await Axios.post(`http://intercambiapp.api.devio.studio/api/v1/user`, data, {
  headers,
});

export const LOGIN = async (data) => await Axios.post(`http://intercambiapp.api.devio.studio/api/v1/login`, data, {
  headers,
});

export const CATEGORIES = async () => await Axios.get(`http://intercambiapp.api.devio.studio/api/v1/category`, {
  headers,
});

export const NEW_EXCHANGE = async (data) => await Axios.post('http://intercambiapp.api.devio.studio/api/v1/exchange', data, {
  headers,
});

export const EXCHANGES = async (data) => await Axios.get('http://intercambiapp.api.devio.studio/api/v1/exchange', {
  headers,
});

export const EXCHANGE = async (id) => await Axios.get(`http://intercambiapp.api.devio.studio/api/v1/exchange/${id}`, {
  headers,
});

export const FRIENDS = async (data) => await Axios.get(`http://intercambiapp.api.devio.studio/api/v1/friends/${data}`, {
  headers,
});

export const DELETE_EXCHANGE = async (data) => await Axios.get(`http://intercambiapp.api.devio.studio/api/v1/delete/exchange/${data}`, {
  headers,
});

export const GET_PAIRS = async (data) => await Axios.get(`http://intercambiapp.api.devio.studio/api/v1/pairs/${data}`, {
  headers,
});

export const FIND_EXCHANGE = async (key, email) => await Axios.get(`http://intercambiapp.api.devio.studio/api/v1/exchange/invite/${key}/${email}`, {
  headers,
});

export const ACCEPT = async (key, email) => await Axios.get(
  `http://intercambiapp.api.devio.studio/api/v1/exchange/invite/confirm/${key}/${email}`, {
    headers,
  });
