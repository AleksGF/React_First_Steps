import axiosInstance from "./axiosInstance";

export const profileAPI = {
  getUser (userId) {
    return axiosInstance.get(`profile/${userId}`).then(resp => resp.data);
  }
};
