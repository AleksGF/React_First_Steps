import axiosInstance from "./axiosInstance";

export const usersAPI = {
  requestUsers (page = 1, count = 10) {
    return axiosInstance.get(`users?page=${page}&count=${count}`).then(resp => resp.data);
  }
};
