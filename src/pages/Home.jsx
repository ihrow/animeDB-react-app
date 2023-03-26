import React, {useState} from 'react';
import {HiMenu} from "react-icons/hi";
import {AiFillCloseCircle} from "react-icons/ai";

import Sidebar from '/src/components/Sidebar';
import {Link, Route, Routes} from "react-router-dom";
import AnimeList from "../components/AnimeList.jsx";
import Anime from "./Anime.jsx";

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar closeToggle={setToggleSidebar}/>
      </div>
      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)} />
        </div>
        {toggleSidebar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggleSidebar(false)}/>
            </div>
            <Sidebar closeToggle={setToggleSidebar}/>
          </div>
        )}
      </div>
      <div className="pb-2 flex-1 h-screen overflow-y-scroll">
        <Routes>
          <Route path="/*" element={<Anime />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;