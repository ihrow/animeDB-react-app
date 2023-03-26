import {animeSlice} from "./AnimeSlice.js";
import {popularAnimeSlice} from "./PopularAnimeSlice.js";
import {searchAnimeSlice} from "./AnimeSearchSlice.js";
import {singleAnimeSlice} from "./SingleAnimeSlice.js";
import {genreAnimeSlice} from "./AnimeByGenreSlice.js";
import axios from "axios";

const fetchAnimeQuery =
  `query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media {
        id
        title {
          english
          native
        }
        coverImage {
          large
        }
        genres
        description
        episodes
        duration
        averageScore
      }
    }
  }`;

const fetchPopularAnimeQuery =
  `query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          english
          native
        }
        coverImage {
          large
        }
        genres
        description
        episodes
        duration
        averageScore
      }
    }
  }`;

const fetchAnimeBySearchQuery =
  `query ($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      media(search: $search, type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          english
          native
        }
        coverImage {
          large
        }
        genres
        description
        episodes
        duration
        averageScore
      }
    }
  }`;

const fetchSingleAnimeQuery =
  `query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      type
      title {
        romaji
        english
        native
      }
      coverImage {
        large
      }
      status
      source
      season
      genres
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      studios {
          edges {
            node {
              name
              isAnimationStudio
            }
          }
        }
      duration
      characters(sort:FAVOURITES_DESC) {
        edges {
          node {
            description
            image {
              large
            }
            name {
              full
              native
            }
          }
        }
      }
      recommendations {
        edges {
          node {
            mediaRecommendation {
              id
              title {
                english
                native
              }
              coverImage {
                large
              }
              description
              genres
            }
          }
        }
      }
      description
      episodes
      averageScore
      popularity
    }
  }`;

const fetchAnimeByGenreQuery =
  `query ($page: Int, $perPage: Int, $genre: String) {
    Page(page: $page, perPage: $perPage) {
      media(genre: $genre, type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          english
          native
        }
        coverImage {
          large
        }
        genres
        description
        episodes
        duration
        averageScore
      }
    }
  }`;


const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const fetchAnime = (page, perPage) => async (dispatch) => {
  const variables = {
    page,
    perPage
  }
  try {
    dispatch(animeSlice.actions.animeFetch());
    const {data} = await axios.post("https://graphql.anilist.co", {
      query: fetchAnimeQuery,
      variables,
      headers,
      withCredentials: false,
    });
    dispatch(animeSlice.actions.animeFetchSuccess(data.data.Page.media));
  } catch (error) {
    dispatch(animeSlice.actions.animeFetchError(error.message));
  }
}

export const fetchPopularAnime = (page, perPage) => async (dispatch) => {
  const variables = {
    page,
    perPage
  }
  try {
    dispatch(popularAnimeSlice.actions.topAnimeFetch());
    const {data} = await axios.post("https://graphql.anilist.co", {
      query: fetchPopularAnimeQuery,
      variables,
      headers,
      withCredentials: false,
    });
    dispatch(popularAnimeSlice.actions.topAnimeFetchSuccess(data.data.Page.media));
  } catch (error) {
    dispatch(popularAnimeSlice.actions.topAnimeFetchError(error.message));
  }
}

export const fetchAnimeBySearch = (page, perPage, search) => async (dispatch) => {
  const variables = {
    page,
    perPage,
    search
  }
  try {
    dispatch(searchAnimeSlice.actions.searchAnimeFetch());
    const {data} = await axios.post("https://graphql.anilist.co", {
      query: fetchAnimeBySearchQuery,
      variables,
      headers,
      withCredentials: false,
    });
    dispatch(searchAnimeSlice.actions.searchAnimeFetchSuccess(data.data.Page.media));
  } catch (error) {
    dispatch(searchAnimeSlice.actions.searchAnimeFetchError(error.message));
  }
}

export const fetchSingleAnime = (id) => async (dispatch) => {
  const variables = {
    id
  }
  try {
    dispatch(singleAnimeSlice.actions.singleAnimeFetch());
    const {data} = await axios.post("https://graphql.anilist.co", {
      query: fetchSingleAnimeQuery,
      variables,
      headers,
      withCredentials: false,
    });
    dispatch(singleAnimeSlice.actions.singleAnimeFetchSuccess(data.data.Media));
  } catch (error) {
    dispatch(singleAnimeSlice.actions.singleAnimeFetchError(error.message));
  }
}

export const fetchAnimeByGenre = (page, perPage, genre) => async (dispatch) => {
  const variables = {
    page,
    perPage,
    genre
  }
  try {
    dispatch(genreAnimeSlice.actions.genreAnimeFetch());
    const {data} = await axios.post("https://graphql.anilist.co", {
      query: fetchAnimeByGenreQuery,
      variables,
      headers,
      withCredentials: false,
    });
    dispatch(genreAnimeSlice.actions.genreAnimeFetchSuccess(data.data.Page.media));
  } catch (error) {
    dispatch(genreAnimeSlice.actions.genreAnimeFetchError(error.message));
  }
}

export const clearAnimeByGenre = () => async (dispatch) => {
  dispatch(genreAnimeSlice.actions.genreAnimeClear());
}