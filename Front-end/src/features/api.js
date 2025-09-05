import axios from "axios";

let baseURL = import.meta.env.VITE_API_DEV_URL;

export const http = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json", // Change to "application/json" if you are sending JSON data
  },
});