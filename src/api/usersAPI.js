import axiosInstance from "./axiosInstance";

export const usersAPI = {
  getUsers (page = 1, count = 10) {
    return axiosInstance.get(`users?page=${page}&count=${count}`).then(resp => resp.data);
  }
};
