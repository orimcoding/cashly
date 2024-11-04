import { apiRequest } from './apiService';

export const getBankTransactions = (token) => apiRequest('bank/transactions', 'GET', null, token);
