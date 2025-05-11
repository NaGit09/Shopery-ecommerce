import axios from "axios";
// define cors url backend 
export const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
});
