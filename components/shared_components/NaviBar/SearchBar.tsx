"use client";

import React from "react";

const SearchBar = () => {
  return (
    <div className="flex relative w-[200px] h-[36px] items-center">
      <input
        className="w-[200px] h-[36px] rounded-[10px] border-[1px] py-[8px] pl-[8px] pr-[30px] z-0"
        type="text"
        placeholder="Search in site"
      />
      <button
        className="min-w-[20px] min-h-[20px] absolute right-0 pr-[8px] z-10"
        type="submit"
      >
        <img
          className="min-w-[20px] min-h-[20px]"
          src="/NaviBar/searchBtn.svg"
          onClick={() => {
            console.log("hello");
          }}
        ></img>
      </button>
    </div>
  );
};

export default SearchBar;
