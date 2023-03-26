import React, {useEffect} from 'react';
import Masonry from "react-masonry-css";
import AnimeListItem from "./AnimeListItem.jsx";

const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 4,
  1200: 3,
  1000: 2,
  500: 1,
}

const MasonryLayout = ({anime}) => {
  return (
    <Masonry className="flex mb-2" breakpointCols={breakpointObj}>
      {anime.map((anime) => (
        <AnimeListItem key={anime.id} anime={anime}/>
      ))}
    </Masonry>
  );
};

export default MasonryLayout;