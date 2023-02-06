import axios from "axios";
import { BASE_URL } from './url';

const getAxios = url => {
   return axios.get(BASE_URL + url);
};

const postAxios = (url, params) => {
   return axios.post(BASE_URL + url, params);
};


export { getAxios, postAxios };