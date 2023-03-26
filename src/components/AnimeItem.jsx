import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchSingleAnime} from "../store/reducers/ActionCreators.js";
import {AiFillStar} from "react-icons/ai";
import {descValidate} from "../utils/descValidate.js";
import CharactersSlider from "./CharactersSlider.jsx";
import AnimeRecommendationSlider from "./AnimeRecommendationSlider.jsx";

import {setGradient} from "../utils/setGradient.js";

const AnimeItem = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const singleAnime = useSelector(state => state.singleAnime);
  const {data, isLoading, error} = singleAnime;

  useEffect(() => {
    dispatch(fetchSingleAnime(id));
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="w-full flex flex-col bg-white px-3 py-3">
      <div className="w-full  flex flex-col md:flex-row">
        <img className="h-full" src={data?.coverImage?.large} alt={data?.title}/>
        <div className="ml-5 mt-1 w-full">
          <div className="flex flex-row gap-2 items-center">
            <AiFillStar className="text-yellow-400" fontSize={32}/>
            <div className="flex flex-col">
              <p className="text-gray-dark text-[20px]">{data?.averageScore / 10}<span className="text-[10px]">/10</span>
              </p>
              <p className="text-gray-dark text-[12px]">Saved by: {data?.popularity}</p>
            </div>
          </div>
          <div className="mt-3">
            <h1 className="text-gray-dark text-3xl font-bold">{data?.title?.english || data?.title?.native}</h1>
            <div className="mt-3">
              <p className="text-gray-dark text-sm">{data?.title?.english && data?.title?.native}</p>
              <p className="text-gray-dark text-sm">{data?.title?.romaji}</p>
            </div>
          </div>
          <hr className="my-3"/>
          <div className="grid grid-cols-3 gap-1">
            <div className="col-span-1 text-gray-light">Type</div>
            <div className="col-span-2 px-4">
              <Link to={`/${data?.type?.toLowerCase()}`}>
                {data?.type}
              </Link>
            </div>
            <div className="col-span-1 text-gray-light">Episodes</div>
            <div className="col-span-2 px-4">{data?.episodes}</div>
            <div className="col-span-1 text-gray-light">Status</div>
            <div className="col-span-2 px-4">{data?.status}</div>
            <div className="col-span-1 text-gray-light">Genres</div>
            <div className="col-span-2 px-4">{data?.genres?.map((genre, index) => (
              <Link to={`/category/${genre}`} key={genre}
                    className={`text-[14px] py-1 mr-2 rounded-xl font-medium text-white ${setGradient(index)}`}>#{genre}
              </Link>
            ))}</div>
            <div className="col-span-1 text-gray-light">Source</div>
            <div className="col-span-2 px-4">{data?.source}</div>
            <div className="col-span-1 text-gray-light">Season</div>
            <div className="col-span-2 px-4">{data?.season}</div>
            <div className="col-span-1 text-gray-light">Broadcast</div>
            <div
              className="col-span-2 px-4">from {data?.startDate?.day}.{data?.startDate?.month}.{data?.startDate?.year} to {data?.endDate?.day}.{data?.endDate?.month}.{data?.endDate?.year}
            </div>
            <div className="col-span-1 text-gray-light">Studio</div>
            <div
              className="col-span-2 px-4">{data?.studios?.edges?.filter(studio => studio?.node?.isAnimationStudio)?.slice(0, 1).map(studio => (
              <p key={studio?.node?.name}>{studio?.node?.name}</p>
            ))}
            </div>
            <div className="col-span-1 text-gray-light">Duration</div>
            <div className="col-span-2 px-4">~{data?.duration} min / episode</div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-gray-dark text-md mt-3">{descValidate(data?.description)}</p>
      </div>
      <div className="mt-5">
        <h1 className="text-gray-dark text-3xl font-bold">Characters</h1>
        <CharactersSlider characters={data?.characters?.edges} />
      </div>
      <div className="mt-5">
        <h1 className="text-gray-dark text-3xl font-bold">We also recommend</h1>
        <AnimeRecommendationSlider recommendations={data?.recommendations?.edges} />
      </div>
    </div>
)
  ;
};

export default AnimeItem;