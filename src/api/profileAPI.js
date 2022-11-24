import axiosInstance from "./axiosInstance";

export const profileAPI = {
  getUser (userId) {
    return axiosInstance.get(`profile/${userId}`).then(resp => resp.data);
  },

  getUserStatus (userId) {
    return axiosInstance.get(`/profile/status/${userId}`);
  },

  setStatus (status) {
    return axiosInstance.put(`/profile/status`, {status});
  }
};
