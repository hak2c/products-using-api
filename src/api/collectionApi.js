import axiosClient from "./axiosClient";
class CollectionApi {
  getCollections = (params) => {
    const url = "collections";
    return axiosClient.get(url, { params });
  };
}

const collectionApi = new CollectionApi();
export default collectionApi;
