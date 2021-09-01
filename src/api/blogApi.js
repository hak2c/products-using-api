import axiosClient from "./axiosClient";

const blogApi = {
  getBlogs: (params) => {
    const url = "blogs";
    return axiosClient.get(url, { params });
  },
};

export default blogApi;
