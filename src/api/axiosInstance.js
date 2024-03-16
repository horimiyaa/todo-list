import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://11889acbf8909dd1.mokky.dev",
  timeout: 8000,
  headers: { Accept: "application/json" },
});
