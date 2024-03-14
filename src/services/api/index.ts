import axios from "axios";

const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
console.log(apiEndpoint)
const instance = axios.create({
  baseURL: apiEndpoint,
});

export { instance };