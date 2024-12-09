import axios, {type AxiosInstance} from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://recruitment-test.flip.id',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
