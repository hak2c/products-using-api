import axiosClient from "./axiosClient";

const { REACT_APP_LOGGED_KEY } = process.env;

class UserApi {
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
