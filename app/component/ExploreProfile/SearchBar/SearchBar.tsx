"use client";

import React from "react";
import style from "/SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className="flex w-full h-[50px] p-[10px] gap-[10px] items-center justify-center">
      <input
        name="keyword"
        id="keyword"
        className="w-[360px] h-[30px] border-[1px] rounded-[10px] px-[12px] py-[8px]"
        type="text"
        placeholder="｜搜尋職稱或領域關鍵字"
      />
      <label
        className="flex relative w-[82px] h-[30px] items-center"
        htmlFor="industry"
      >
        <select
          name="industry"
          id="industry"
          className="w-[82px] h-[30px] rounded-[10px] px-[10px] py-[3px] appearance-none"
        >
          <option value="0" selected>
            產業
          </option>
        </select>
        <img
          className="absolute w-6 h-6 right-[6px]"
          src="/ExploreProfile/selectArrow.svg"
        />
      </label>
      <label
        className="flex relative w-[82px] h-[30px] items-center"
        htmlFor="career"
      >
        <select
          name="career"
          id="career"
          className="w-[82px] h-[30px] rounded-[10px] px-[10px] py-[3px] appearance-none"
        >
          <option value="0" selected>
            職業
          </option>
        </select>
        <img
          className="absolute w-6 h-6 right-[6px]"
          src="/ExploreProfile/selectArrow.svg"
        />
      </label>
      <label
        className="flex relative w-[115px] h-[30px] items-center"
        htmlFor="corpType"
      >
        <select
          name="corpType"
          id="corpType"
          className="w-[115px] h-[30px] rounded-[10px] px-[10px] py-[3px] appearance-none"
        >
          <option value="0" selected>
            企業類別
          </option>
        </select>
        <img
          className="absolute w-6 h-6 right-[6px]"
          src="/ExploreProfile/selectArrow.svg"
        />
      </label>
      <button className="min-w-[135px] min-h-[30px] rounded-[10px] text-center text-white bg-black hover:bg-white/20">
        搜尋
      </button>
    </div>
  );
};

export default SearchBar;
