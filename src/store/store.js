import {combineReducers, configureStore} from "@reduxjs/toolkit";
import animeSlice from "./reducers/AnimeSlice";
import searchAnimeSlice from "./reducers/AnimeSearchSlice.js";
import topAnimeSlice from "./reducers/PopularAnimeSlice.js";
import singleAnimeSlice from "./reducers/SingleAnimeSlice.js";
import genreAnimeSlice from "./reducers/AnimeByGenreSlice.js";


const rootReducer = combineReducers({
  anime: animeSlice,
  topAnime: topAnimeSlice,
  searchAnime: searchAnimeSlice,
  singleAnime: singleAnimeSlice,
  genreAnime: genreAnimeSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})