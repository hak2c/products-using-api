import axiosClient from "./axiosClient";

const { REACT_APP_LOGGED_KEY } = process.env;

class UserApi {
  userLogin = (params) => {
    const url = process.env.REACT_APP_USER_API + "login";
    const headers = {
      "content-type": "application/json",
    };
    return axiosClient.post(url, headers, { params });
  };
  checkLoggedUser = (token, params) => {
    const url = process.env.REACT_APP_USER_API + "users";
    const headers = {
      "content-type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    };
    return axiosClient.get(url, headers, { params });
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
