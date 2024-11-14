import { apiRequest } from './apiService';

export const fetchAIInsights = (token) => apiRequest('insights', 'GET', null, token);
