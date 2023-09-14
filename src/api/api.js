import axios from 'axios';

axios.defaults.baseURL = 'https://6489e5ed5fa58521cab07075.mockapi.io/contacts';

export const getAdverts = async page => {
  try {
    const response = await axios.get('/adverts', {
      params: {
        page: page,
        limit: 8,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};