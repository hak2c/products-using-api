import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, LIMIT_PER_PAGE, fetchData } from "../../components/Utils";

export const fetchProductsByCollectionId = createAsyncThunk(
  API_URL + "products",
  async (url, thunkParams) => {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      const total = response.headers.get("X-Total-Count");
      return { data, total };
    } else {
      return response.status + ":" + response.statusText;
    }
  }
);

export const fetchAllCollections = createAsyncThunk(
  API_URL + "collections",
  async (url, thunkParams) => {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return response.status + ":" + response.statusText;
    }
  }
);

const initialState = {
  collections: [],
  products: [],
  totalPages: 0,
  currentCollection: {},
  spinner: true,
  error: {},
};

export const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    setSpinner: (state, action) => {
      const status = action.payload;
      state.spinner = status;
    },
  },
  extraReducers: {
    [fetchProductsByCollectionId.fulfilled]: (state, action) => {
      const { data, total } = action.payload;
      if (typeof data !== "undefined") {
        state.products = data;
        state.totalPages = Math.ceil(Number(total) / LIMIT_PER_PAGE);
        state.currentCollection = data[0].collection;
        document.title = data[0].collection.title;
        state.spinner = false;
      }
    },
    [fetchProductsByCollectionId.rejected]: (state, action) => {
      state.products = [];
      state.spinner = false;
      state.error = action.payload;
    },
    [fetchAllCollections.fulfilled]: (state, action) => {
      const data = action.payload;
      if (Array.isArray(data)) state.collections = data;
    },
    [fetchAllCollections.rejected]: (state, action) => {
      state.collections = [];
      state.error = action.payload;
    },
  },
});

export const { setSpinner } = collectionsSlice.actions;

export default collectionsSlice.reducer;
