import axiosClient from "./axiosClient";

const { REACT_APP_LOGGED_KEY } = process.env;

class UserApi {
  userLogin = (data) => {
    const url = "login";
    return axiosClient.post(url, data, {
      baseURL: process.env.REACT_APP_USER_API,
    });
  };
  checkLoggedUser = (token, params) => {
    const url = "users";
    const headers = {
      "content-type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    };
    return axiosClient.get(url, {
      params,
      headers,
      baseURL: process.env.REACT_APP_USER_API,
    });
  };
  getLoggedUser = () => {
    let user = localStorage.getItem(REACT_APP_LOGGED_KEY);
    if (user === null || user === "") {
      return null;
    } else {
      return JSON.parse(user);
    }
  };
}

const userApi = new UserApi();
export default userApi;
