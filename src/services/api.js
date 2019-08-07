import axios from 'axios';
import ServerConfig from '../config/server';

const api = axios.create({
	baseURL: ServerConfig.getURL('api/v1')
});

export default api;
