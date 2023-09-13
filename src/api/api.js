import axios from 'axios';

axios.defaults.baseURL = 'https://6489e5ed5fa58521cab07075.mockapi.io/contacts';

export const limit = 10;

export const getAdverts = async (page = 1) => {
    const { data } = await axios.get(`/adverts?limit=${limit}&page=${page}`);
    return data;
};