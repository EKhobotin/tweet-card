import axios from 'axios';

axios.defaults.baseURL = 'https://65d9fd5fbcc50200fcdc6643.mockapi.io';

export const fetchUsers = async () => {
  const { data } = await axios.get('/users');
  return data;
};
