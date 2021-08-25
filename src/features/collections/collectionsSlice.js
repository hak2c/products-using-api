import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../components/Utils";

const initialState = {
  value: [],
};

export const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    updateCollections: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateCollections } = collectionsSlice.actions;
