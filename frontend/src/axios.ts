import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const instance: any = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string
});

export default instance;

// Код ниже почему то выдает ошибку , не могу понять почему.
// уже перепробовал все возможные варианты которые нашел в интернете и у чата спросил

// import axios, { AxiosInstance } from 'axios';

// const instance: AxiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL as string
// });

// export default instance;