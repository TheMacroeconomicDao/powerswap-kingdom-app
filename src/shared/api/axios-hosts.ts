import axios from 'axios';
import { HOST } from '../config/host';

export const API_URL = `${HOST}/api/v1`;

export const serverApiHost = axios.create({
  baseURL: `api/v1`,

  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});