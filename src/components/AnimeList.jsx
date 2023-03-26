import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAnime, fetchAnimeByGenre, clearAnimeByGenre} from "../store/reducers/ActionCreators.js";
import MasonryLayout from "./MasonryLayout.jsx";
import {useParams} from "react-router-dom";

const AnimeList = () => {
  const intersectRef = useRef();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { category } = useParams();
  const animeData = category ? useSelector(state => state.genreAnime) : useSelector(state => state.anime);
  const {data, isLoading, error} = animeData;

  useEffect(() => {
    dispatch(clearAnimeByGenre());
  }, [category]);

  useEffect(() => {
    if (category) {
      dispatch(fetchAnimeByGenre(page, 15, category));
    } else {
      dispatch(fetchAnime(page, 15));
    }
  }, [page]);

  useEffect(() => {
    console.log("useEffect");
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        category && window.scrollTo(0, 0);
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