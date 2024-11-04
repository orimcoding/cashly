import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const apiRequest = async (endpoint, method = 'GET', data = null, token = '') => {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try {
        const response = await axios({
            url: `${API_BASE_URL}/${endpoint}`,
            method,
            data,
            headers,
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};
