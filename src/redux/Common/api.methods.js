import axios from 'axios';
import apiUrls from './api.urls';

const instance = axios.create({ timeout: '15000' });

const ApiMainMethods = {
    getPlayers: async () => {
        const response = await instance.get(apiUrls.getPlayers(), {
            headers: {
                Authorization: 'Bearer keys95aa1f7UFBnhj'
            }
        });
        return response?.data;
    },
    createPlayer: async (data) => {
        const response = await instance.post(apiUrls.createPlayer(), data, {
            headers: {
                Authorization: 'Bearer keys95aa1f7UFBnhj',
                'Content-Type': 'application/json'
            }
        });
        return response?.data;
    }
};

export default ApiMainMethods;
