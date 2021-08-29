import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_API, LOGGED_KEY, getLoggedUser } from "../../components/Utils";

const initialState = {
  showLoginForm: false,
  loggedUser: false,
  status: "",
  user: getLoggedUser(),
};

export const submitLoginForm = createAsyncThunk(
  "loginWithUsername",
  async (data, thunkParams) => {
    const response = await fetch(USER_API + "login", {
      body: data,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    if (response.status === 200) {
      return res;
    } else {
      throw res.message;
    }
  }
);

export const checkLoggegUser = createAsyncThunk(
  "checkLoggegUser",
  async (token, thunkParams) => {
    const response = await fetch(USER_API + "users", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 200) {
      return true;
    } else {
      throw false;
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
      localStorage.setItem(LOGGED_KEY, "");
      window.location.reload();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLoginForm.fulfilled, (state, action) => {
        const user = action.payload;
        localStorage.setItem(LOGGED_KEY, JSON.stringify(user));
        state.user = getLoggedUser();
        state.showLoginForm = false;
      })
      .addCase(submitLoginForm.rejected, (state, action) => {
        state.status = action.error.message;
      })
      .addCase(checkLoggegUser.fulfilled, (state, action) => {
        const status = action.payload;
        state.loggedUser = status;
      })
      .addCase(checkLoggegUser.rejected, (state, action) => {
        const status = action.payload;
        state.loggedUser = status;
        localStorage.setItem(LOGGED_KEY, "");
      });
  },
});

export const { setShowLoginForm, setLoggedUser, userLogout } =
  usersSlice.actions;

export default usersSlice.reducer;
