import Axios from 'axios';

export const SIGNUP = async (data) => await Axios.post(`http://localhost:3040/api/v1/user`, data);

export const LOGIN = async (data) => await Axios.post(`http://localhost:3040/api/v1/login`, data);
