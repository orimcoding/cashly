import { apiRequest } from './apiService';

export const signup = (email, password) => apiRequest('auth/signup', 'POST', { email, password });
export const login = (email, password) => apiRequest('auth/login', 'POST', { email, password });
