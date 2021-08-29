import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import collectionApi from "../../api/collectionApi";
import productApi from "../../api/productApi";

import { LIMIT_PER_PAGE } from "../../components/Utils";

export const fetchProductsByCollectionId = createAsyncThunk(
  "fetchProductsByCollectionId",
  async (params, thunkParams) => {
    try {
      const response = await productApi.getProducts(params);
      if (response.status === 200) {
        const products = response.data;
        const total = response.headers["x-total-count"];
        return { products, total };
      } else {
        throw response.status + ":" + response.statusText;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const fetchAllCollections = createAsyncThunk(
  "fetchAllCollections",
  async (thunkParams) => {
    try {
      const response = await collectionApi.getAll();
      if (response.status === 200) {
        return response.data;
      } else {
        throw response.status + ":" + response.statusText;
      }
    } catch (error) {
      throw error;
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCollectionId.fulfilled, (state, action) => {
        const { products, total } = action.payload;
        state.products = products;
        state.totalPages = Math.ceil(Number(total) / LIMIT_PER_PAGE);
        state.currentCollection = products[0].collection;
        document.title = products[0].collection.title;
        state.spinner = false;
      })
      .addCase(fetchProductsByCollectionId.rejected, (state, action) => {
        state.products = [];
        state.spinner = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchAllCollections.fulfilled, (state, action) => {
        const collections = action.payload;
        state.collections = collections;
      })
      .addCase(fetchAllCollections.rejected, (state, action) => {
        const data = action.payload;
        if (Array.isArray(data)) state.collections = data;
      });
  },
});

export const { setSpinner } = collectionsSlice.actions;

export default collectionsSlice.reducer;
