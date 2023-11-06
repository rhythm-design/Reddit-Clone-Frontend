import axios from 'axios';
import authHeader from './services/user-service';

const api = axios.create({
  baseURL: 'https://reddit-clone-backend-production.up.railway.app/api',
  headers: authHeader()
});

export default api;
