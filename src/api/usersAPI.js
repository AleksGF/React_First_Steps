import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {'API-KEY': 'df274435-25e3-4140-bbc6-2407b1c8edf4',},
  withCredentials: true,
});

export const usersAPI = {
  getUsers (page = 1, count = 10) {
    return axiosInstance.get(`users?page=${page}&count=${count}`).then(resp => resp.data);
  },

  getUser (userId) {
    return axiosInstance.get(`profile/${userId}`).then(resp => resp.data);
  },

  getIsFollowUser (userId) {
    return axiosInstance.get(`/follow/${userId}`).then(resp => resp.data);
  },

  setFollowUser (userId) {
    return axiosInstance.post(`/follow/${userId}`).then(resp => resp.data);
  },

  setUnfollowUser (userId) {
    return axiosInstance.delete(`/follow/${userId}`).then(resp => resp.data);
  }
};
