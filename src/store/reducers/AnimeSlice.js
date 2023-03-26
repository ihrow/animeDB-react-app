import {createSlice} from "@reduxjs/toolkit";
import { fetchReducer, fetchSuccessReducer, fetchErrorReducer } from "./reducers.js";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
}

export const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    animeFetch: fetchReducer,
    animeFetchSuccess: fetchSuccessReducer,
    animeFetchError: fetchErrorReducer,
  }
})

export default animeSlice.reducer