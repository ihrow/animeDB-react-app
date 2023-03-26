import React, {useEffect, useState} from 'react';
import {IoMdSearch} from "react-icons/io";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {fetchAnimeBySearch} from "../store/reducers/ActionCreators.js";
import {useDispatch} from "react-redux";
import useDebounce from "../hooks/useDebounce.js";

const Navbar = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(search, 500);

  const handleSearch = () => {
    dispatch(fetchAnimeBySearch(1, 25, search));
  }

  useEffect(() => {
    if (debouncedValue) {
      handleSearch();
    }
  }, [debouncedValue]);

  return (
    <div className="flex flex-col gap-2 md:gap-5 w-full mt-5 pb-7 items-center justify-center">
      <ul className="flex justify-between gap-10 text-black font-medium text-sm md:text-lg">
        <li><Link to='/'>Anime</Link></li>
        <li><Link to='/popular'>Most Popular Anime</Link></li>
      </ul>
      <div className="flex justify-start items-center w-[70%] px-2 py-1 rounded-md bg-white border-none outline-none focus:focus-within:shadow-sm" >
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => navigate('/search')}
          value={search}
          type="text"
          placeholder="Search Anime"
          className="p-2 w-full bg-white outline-none text-black font-medium"
        />
      </div>
    </div>
  );
};

export default Navbar;