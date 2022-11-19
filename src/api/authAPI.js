import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {'API-KEY': 'df274435-25e3-4140-bbc6-2407b1c8edf4',},
  withCredentials: true,
});

export const authAPI = {
  getCurrentUser () {
    return axiosInstance.get(`auth/me`).then(resp => resp.data.data);
  },
};
