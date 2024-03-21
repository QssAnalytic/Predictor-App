import axios, { AxiosInstance } from "axios";

const apiEndpoint: string = import.meta.env.VITE_API_ENDPOINT;
console.log(apiEndpoint);
const instance: AxiosInstance = axios.create({
  baseURL: apiEndpoint,
});

export { instance };
