import axiosClient from "./axiosClient";

const collectionApi = {
  getCollections: (params) => {
    const url = "collections";
    return axiosClient.get(url, { params });
  },
};

export default collectionApi;
