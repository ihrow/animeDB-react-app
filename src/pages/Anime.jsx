import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import AnimeList from "../components/AnimeList.jsx";
import TopAnimeList from "../components/PopularAnimeList.jsx";
import SearchAnimeList from "../components/SearchAnimeList.jsx";
import Navbar from "../components/Navbar.jsx";
import AnimeItem from "../components/AnimeItem.jsx";

const Anime = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar search={search} setSearch={setSearch}/>
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/*" element={<AnimeList/>}/>
          <Route path='/popular' element={<TopAnimeList/>}/>
          <Route path='/search' element={<SearchAnimeList search={search}/>}/>
          <Route path='/anime/:id' element={<AnimeItem />}/>
          <Route path='/category/:category' element={<AnimeList/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Anime;