import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import { AiFillStar } from "react-icons/ai";
import {descValidate} from "../utils/descValidate.js";

const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
}

const setGradient = (idx) => {
  switch (idx) {
    case 0:
      return "blue-bg-gradient";
    case 1:
      return "pink-bg-gradient";
    case 2:
      return "green-bg-gradient";
  }
}

const AnimeListItem = ({anime}) => {


  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-white p-5 rounded-2xl sm:w-[360px] w-full "
    >
      <div
        className="relative w-full h-full"
      >
        <Link to={`/anime/${anime.id}`}>
          <img
            src={anime.coverImage.large}
            alt={anime.title.english}
            className=" w-full h-full object-cover rounded-2xl"
          />
        </Link>
      </div>
      <div className="mt-5">
        <Link to={`/anime/${anime.id}`}>
          <h3 className="text-black font-bold text-[24px]">
            {anime.title.english || anime.title.native}
          </h3>
        </Link>
        <p className="mt-2 text-secondary text-[14px] ">
          {anime.description?.length > 200 ? descValidate(anime.description.slice(0, 200)) + "..." : descValidate(anime.description)}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 items-center justify-center">
        {anime.genres.slice(0, 3).map((genre, index) => (

          <Link to={`/category/${genre}`} key={genre} className={`text-[14px] py-1 px-2 rounded-xl text-white ${setGradient(index)}`}>
            #{genre}
          </Link>
        ))}
        <div className="flex flex-row justify-center items-center w-full">
          <AiFillStar className="text-[#FFD700] text-[24px]"/>
          <p className="text-[#FFD700] text-[24px]">{anime.averageScore / 10}/10</p>
        </div>
      </div>
    </Tilt>
  );
};

export default AnimeListItem;