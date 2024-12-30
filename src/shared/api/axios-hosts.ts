import axios from 'axios';
import { HOST } from '../config/host';

export const API_URL = `${HOST}/api/v1`;
export const NEXT_API_URL = process.env.NEXT_PUBLIC_API_URL;
// export const NEXT_SERVER_API_URL = process.env.NEXT_PUBLIC_HOST_SERVER_URL;

export const nextApiHost = axios.create({
  baseURL: `${NEXT_API_URL}/next-api`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

// #test

export const serverApiHost = axios.create({
  baseURL: `http://127.0.0.1:5000/api/v1`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
