import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPopularAnime} from "../store/reducers/ActionCreators.js";
import MasonryLayout from "./MasonryLayout.jsx";
import Navbar from "./Navbar.jsx";

const AnimeList = () => {
  const intersectRef = useRef();
  const [page, setPage] = useState(1);

  const animeData = useSelector(state => state.topAnime);
  const dispatch = useDispatch();
  const {data, isLoading, error} = animeData;

  useEffect(() => {
    dispatch(fetchPopularAnime(page, 10));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage(prev => prev + 1);
      }
    });
    observer.observe(intersectRef.current);
  }, [])


  return (
    <div className="flex flex-row justify-center items-center flex-wrap">
      {error && <div>{error}</div>}
      {!error && <MasonryLayout anime={data}/>}
      {isLoading && <div className="w-full h-[300px] text-center font-bold text-xl">Loading...</div>}
      <div ref={intersectRef} className="w-full bg-black"></div>
    </div>
  );
};

export default AnimeList;