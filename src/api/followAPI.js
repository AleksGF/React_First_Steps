import axiosInstance from "./axiosInstance";

export const followAPI = {
  getIsFollowUser (userId) {
    return axiosInstance.get(`/follow/${userId}`).then(resp => resp.data);
  },

  setFollowUser (userId) {
    return axiosInstance.post(`/follow/${userId}`).then(resp => resp.data);
  },

  setUnfollowUser (userId) {
    return axiosInstance.delete(`/follow/${userId}`).then(resp => resp.data);
  }
}