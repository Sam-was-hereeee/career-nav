"use client";

import React from "react";
import TagSelect from "../shared_components/TagSelect";

const SearchBar = () => {
  return (
    <>
      <div className="flex w-full h-[50px] p-[10px] gap-[10px] items-center justify-center">
        <input
          name="keyword"
          id="keyword"
          className="w-[360px] h-[30px] border-[1px] rounded-[10px] px-[12px] py-[8px]"
          type="text"
          placeholder="｜搜尋職稱或領域關鍵字"
        />
        <TagSelect id="industry" option={["test"]} opValue={["test"]}>
          產業
        </TagSelect>
        <TagSelect id="career" option={[]} opValue={[]}>
          職業
        </TagSelect>
        <TagSelect id="corpType" option={[]} opValue={[]}>
          企業類別
        </TagSelect>
        <TagSelect id="skill" option={[]} opValue={[]}>
          技能對應
        </TagSelect>
        <TagSelect id="workMode" option={[]} opValue={[]}>
          工作模式
        </TagSelect>
        <TagSelect id="region" option={[]} opValue={[]}>
          區域
        </TagSelect>
      </div>
      <button className="w-[240px] h-[48px] rounded-[20px] p-[12px] text-center text-white bg-black hover:bg-white/20 transition-all duration-300 ease-in">
        搜尋
      </button>
    </>
  );
};

export default SearchBar;
