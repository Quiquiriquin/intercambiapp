import Axios from 'axios';

const headers = {
  'authorization': sessionStorage.getItem('authorization'),
  'x-refresh-token': sessionStorage.getItem('x-refresg-token'),
}

export const SIGNUP = async (data) => await Axios.post(`http://localhost:3040/api/v1/user`, data, {
  headers,
});

export const LOGIN = async (data) => await Axios.post(`http://localhost:3040/api/v1/login`, data, {
  headers,
});

export const CATEGORIES = async () => await Axios.get(`http://localhost:3040/api/v1/category`, {
  headers,
});

export const NEW_EXCHANGE = async (data) => await Axios.post('http://localhost:3040/api/v1/exchange', data, {
  headers,
});

export const EXCHANGES = async (data) => await Axios.get('http://localhost:3040/api/v1/exchange', {
  headers,
});

export const EXCHANGE = async (id) => await Axios.get(`http://localhost:3040/api/v1/exchange/${id}`, {
  headers,
});

export const FRIENDS = async (data) => await Axios.get(`http://localhost:3040/api/v1/friends/${data}`, {
  headers,
});
