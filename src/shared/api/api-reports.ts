import axios from "axios";

export const apiReports = axios.create({
  baseURL: import.meta.env.VITE_URL_BACKEND ?? "NO_URL_BACKEND",
});
