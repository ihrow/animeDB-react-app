import React, {useState} from 'react';
import {useSelector} from "react-redux";
import MasonryLayout from "./MasonryLayout.jsx";

const SearchAnimeList = ({ search }) => {
  const animeData = useSelector(state => state.searchAnime);
  const {data, isLoading, error} = animeData;


  return (
    <div className="flex flex-row justify-center items-center flex-wrap">
      {isLoading && <div className="w-100 h-100">Loading...</div>}
      {error && <div>{error}</div>}
      {!isLoading && !error && <MasonryLayout anime={data}/>}
      {data?.length === 0 && !isLoading && !error && search !== "" && <div>No results found</div>}
    </div>
  );
};

export default SearchAnimeList;