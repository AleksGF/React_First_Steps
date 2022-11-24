import axiosInstance from "./axiosInstance";

export const authAPI = {
  getCurrentUser () {
    return axiosInstance.get(`auth/me`).then(resp => resp.data.data);
  },
};
