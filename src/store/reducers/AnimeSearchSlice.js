import {createSlice} from "@reduxjs/toolkit";
import { fetchReducer, fetchSuccessReducer, fetchErrorReducer } from "./reducers.js";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
}

export const searchAnimeSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchAnimeFetch: fetchReducer,
    searchAnimeFetchSuccess (state, action) {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    searchAnimeFetchError: fetchErrorReducer,
  }
})

export default searchAnimeSlice.reducer