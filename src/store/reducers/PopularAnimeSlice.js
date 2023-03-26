import {createSlice} from "@reduxjs/toolkit";
import { fetchReducer, fetchSuccessReducer, fetchErrorReducer } from "./reducers.js";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
}

export const popularAnimeSlice = createSlice({
  name: "topAnime",
  initialState,
  reducers: {
    topAnimeFetch: fetchReducer,
    topAnimeFetchSuccess: fetchSuccessReducer,
    topAnimeFetchError: fetchErrorReducer,
  }
})

export default popularAnimeSlice.reducer