import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LIMIT_PER_PAGE } from "../../components/Utils";

export const fetchProductsByCollectionId = createAsyncThunk(
  "fetchCollectionById",
  async (url, thunkParams) => {
    const response = await fetch(url);
    const data = await response.json();
    const total = response.headers.get("X-Total-Count");
    return { data, total };
  }
);

export const fetchAllCollections = createAsyncThunk(
  "fetchAllCollections",
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCollectionId.fulfilled, (state, action) => {
        const { data, total } = action.payload;
        state.products = data;
        state.totalPages = Math.ceil(Number(total) / LIMIT_PER_PAGE);
        state.currentCollection = data[0].collection;
        document.title = data[0].collection.title;
        state.spinner = false;
      })
      .addCase(fetchProductsByCollectionId.rejected, (state, action) => {
        state.products = [];
        state.spinner = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchAllCollections.fulfilled, (state, action) => {
        const data = action.payload;
        if (Array.isArray(data)) state.collections = data;
      })
      .addCase(fetchAllCollections.rejected, (state, action) => {
        const data = action.payload;
        if (Array.isArray(data)) state.collections = data;
      });
  },
});

export const { setSpinner } = collectionsSlice.actions;

export default collectionsSlice.reducer;
