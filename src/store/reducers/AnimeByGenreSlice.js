import {createSlice} from "@reduxjs/toolkit";
import { fetchReducer, fetchSuccessReducer, fetchErrorReducer } from "./reducers.js";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
}

export const genreAnimeSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    genreAnimeFetch: fetchReducer,
    genreAnimeFetchSuccess: fetchSuccessReducer,
    genreAnimeFetchError: fetchErrorReducer,
    genreAnimeClear: (state) => {
      state.data = [];
      state.isLoading = false;
      state.error = null;
    }
  }
})

export default genreAnimeSlice.reducer