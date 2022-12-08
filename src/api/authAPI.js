import axiosInstance from "./axiosInstance";

export const authAPI = {
  getCurrentUser () {
    return axiosInstance.get(`auth/me`).then(resp => resp.data.data);
  },
  login (email, password, rememberMe = false) {
    return axiosInstance.post('auth/login', { email, password, rememberMe }).then(resp => resp.data);
  },
  logout () {
    return axiosInstance.delete('auth/login').then(resp => resp.data);
  }
};
