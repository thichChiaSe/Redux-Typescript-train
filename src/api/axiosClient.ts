import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("access_token") ?? ""}${
      localStorage.getItem("access_token") ?? ""
    }`,
  },
});

axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    config.headers = {
      "Content-Type": config.url?.includes("Import")
        ? "multipart/form-data"
        : "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("access_token") ?? ""} ${
        localStorage.getItem("access_token") ?? ""
      }`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default axiosClient;
