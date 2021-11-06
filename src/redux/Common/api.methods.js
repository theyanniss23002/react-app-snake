import axios from 'axios';
import apiUrls from './api.urls';

const instance = axios.create({ timeout: '15000' });

const ApiMainMethods = {
    getCharacters: async () => {
        const response = await instance.get(apiUrls.getCharacters());
        return response?.data;
    }
};

export default ApiMainMethods;
