import axiosClient from "./axiosClient";

class CollectionApi {
  getAll = (params) => {
    const url = process.env.REACT_APP_API_URL + "collections";
    const headers = {
      "content-type": "application/json",
    };
    return axiosClient.get(url, headers, { params });
  };
}

const collectionApi = new CollectionApi();

export default collectionApi;
