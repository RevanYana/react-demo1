import config from "axios";
import { saToast } from "../helpers";

const axios = config.create({
  // baseURL: "http://localhost:8000/",
  baseURL: "https://manajemen-alfaprima.com/",
});

export const fetchingData = (
  icon = "success",
  title = "Loading, please wait !"
) => {
  saToast(icon, title);
};

export const headers = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const loginAuth = (data) => {
  fetchingData();
  return axios.post("/api/login", data);
};

export const checkAuth = (token) => {
  return axios.get("/api/check-mhs", headers(token));
};

// Logout
export const postLogout = (token) => {
  return axios.post(`/api/logout`, null, headers(token));
};

// KRS
export const fetchKrs = (page = 1, token, custom = "") => {
  return axios.get(`/api/krs?page=${page}&${custom}`, headers(token));
};

// Profile
export const patchProfile = (id, data, token) => {
  return axios.patch(`/api/mhs/${id}`, data, headers(token));
};
