import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const { REACT_APP_LOGGED_KEY, REACT_APP_USER_API } = process.env;

import userApi from "../../api/userApi";

const initialState = {
  showLoginForm: false,
  loggedUser: false,
  status: "",
  user: userApi.getLoggedUser(),
};

export const submitLoginForm = createAsyncThunk(
  "loginWithUsername",
  async (data, thunkParams) => {
    try {
      const response = await userApi.userLogin(data);
      if (response.status === 200) {
        return response.data;
      } else if (response.status === 400) {
        throw "Username or password is incorrect!";
      } else {
        throw response.message;
      }
    } catch (error) {
      throw "Username or password is incorrect!";
    }
  }
);

export const checkLogged = createAsyncThunk(
  "checkLoggedUser",
  async (token, thunkParams) => {
    try {
      const response = await userApi.checkLoggedUser(token, {});
      if (response.status === 200) {
        return true;
      } else {
        throw false;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setShowLoginForm: (state, action) => {
      const status = action.payload;
      state.showLoginForm = status;
    },
    setLoggedUser: (state, action) => {
      const status = action.payload;
      state.loggedUser = status;
    },
    userLogout: (state) => {
      localStorage.setItem(REACT_APP_LOGGED_KEY, "");
      window.location.reload();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLoginForm.fulfilled, (state, action) => {
        const user = action.payload;
        localStorage.setItem(REACT_APP_LOGGED_KEY, JSON.stringify(user));
        state.user = userApi.getLoggedUser();
        state.showLoginForm = false;
      })
      .addCase(submitLoginForm.rejected, (state, action) => {
        state.status = action.error.message;
      })
      .addCase(checkLogged.fulfilled, (state, action) => {
        const status = action.payload;
        state.loggedUser = status;
      })
      .addCase(checkLogged.rejected, (state, action) => {
        const status = action.payload;
        state.loggedUser = status;
        localStorage.setItem(REACT_APP_LOGGED_KEY, "");
      });
  },
});

export const { setShowLoginForm, setLoggedUser, userLogout } =
  usersSlice.actions;

export default usersSlice.reducer;
