import config from "axios";
import { getOrigin, saToast } from "../helpers";

const axios = config.create({
  baseURL: getOrigin(),
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
  fetchingData();
  return axios.post(`/api/logout`, null, headers(token));
};

// KRS
// index
export const fetchKrs = (page = 1, token, custom = "") => {
  return axios.get(`/api/krs?page=${page}&${custom}`, headers(token));
};

// Kelas
// show
export const showKelas = (id, token, custom = "") => {
  return axios.get(`/api/kelas/${id}?${custom}`, headers(token));
};

// Profile
export const patchProfile = (id, data, token) => {
  fetchingData();
  return axios.patch(`/api/mhs/${id}`, data, headers(token));
};
