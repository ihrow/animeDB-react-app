import {createSlice} from "@reduxjs/toolkit";
import { fetchReducer, fetchSuccessReducer, fetchErrorReducer } from "./reducers.js";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
}

export const singleAnimeSlice = createSlice({
  name: "animeItem",
  initialState,
  reducers: {
    singleAnimeFetch: fetchReducer,
    singleAnimeFetchSuccess (state, action) {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    singleAnimeFetchError: fetchErrorReducer,
  }
})

export default singleAnimeSlice.reducer