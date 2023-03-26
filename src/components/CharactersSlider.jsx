import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {descValidate} from "../utils/descValidate.js";
import useMobile from "../hooks/useMobile.js";

const CharactersSlider = ({ characters }) => {
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
        {characters?.map((character, idx) => (
          <div key={idx} className="px-5">
            <img className="rounded-xl w-full" src={character?.node?.image?.large} alt={character?.node?.name?.full} />
            <h1 className="text-black font-bold text-[24px] mt-3">
              {character?.node?.name?.full}
            </h1>
            <p className="mt-3">
              {character?.node?.description?.length > 200 ? descValidate(character?.node?.description.slice(0, 200)) + "..." : descValidate(character?.node?.description)}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CharactersSlider;