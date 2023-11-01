import axios from 'axios';
import authHeader from './services/user-service';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: authHeader()
});

export default api;