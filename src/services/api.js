import axios from 'axios'

axios.defaults.baseURL = `https://https://65cbd8f2efec34d9ed882e83.mockapi.io`;

export const requestAllCars = async () => {
  const { data } = await axios.get(`/cars`);
  
  return data;
};
