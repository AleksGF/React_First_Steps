import axiosInstance from "./axiosInstance";

export const profileAPI = {
  getUser (userId) {
    return axiosInstance.get(`profile/${userId}`).then(resp => resp.data);
  },

  getUserStatus (userId) {
    return axiosInstance.get(`/profile/status/${userId}`).then(resp => resp.data);
  },

  putUserStatus (status) {
    return axiosInstance.put(`/profile/status`, {status}).then(resp => resp.data);
  }
};
