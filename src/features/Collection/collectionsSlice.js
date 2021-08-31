import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import collectionApi from "../../api/collectionApi";
import productApi from "../../api/productApi";

const { REACT_APP_LIMIT_PER_PAGE } = process.env;

export const fetchAllCollections = createAsyncThunk(
  "fetchAllCollections",
  async (thunkParams) => {
    try {
      const response = await collectionApi.getCollections();
      if (response.status === 200) {
        return response.data;
      } else {
        throw response.status + ":" + response.statusText;
      }
    } catch (error) {
      throw error.message;
    }
  }
);

const initialState = {
  collections: [],
};

export const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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

export default collectionsSlice.reducer;
