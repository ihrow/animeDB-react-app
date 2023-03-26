import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {descValidate} from "../utils/descValidate.js";
import useMobile from "../hooks/useMobile.js";
import {Link} from "react-router-dom";
import {setGradient} from "../utils/setGradient.js";


const CharactersSlider = ({ recommendations }) => {
  const isMobile = useMobile();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 2 : 5,
    slidesToScroll: isMobile ? 2 : 5,
  }

  return (
    <div className="mt-5">
      <Slider {...settings}>
        {recommendations?.map((recommendation, idx) => {
          const recommendationObj = recommendation?.node?.mediaRecommendation;
          return (
              <div key={idx} className="px-5">
                <Link to={`/anime/${recommendationObj?.id}`} >
                  <img className="rounded-xl w-full" src={recommendationObj?.coverImage?.large} alt={recommendationObj?.title?.english} />
                  <h1 className="text-black font-bold text-[24px] mt-3">
                    {recommendationObj?.title?.english || recommendationObj?.title?.native}
                  </h1>
                </Link>
                <p className="mt-3">
                  {recommendationObj?.description?.length > 200 ? descValidate(recommendationObj?.description.slice(0, 200)) + "..." : descValidate(recommendationObj?.description)}
                </p>
                <div className="w-full text-w flex flex-wrap">
                  {recommendationObj?.genres?.map((genre, index) => (
                    <Link to={`/category/${genre}`} key={genre}
                          className={`text-[14px] py-1 mr-2 rounded-xl font-medium text-white ${setGradient(index)}`}>#{genre}
                    </Link>
                  ))}
                </div>
              </div>
          )})}
      </Slider>
    </div>
  );
};

export default CharactersSlider;