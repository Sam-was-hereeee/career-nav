"use client";

import React from "react";
import TagSelect from "../shared_components/TagSelect";

const SearchBar = () => {
  return (
    <form className="flex w-full h-[50px] p-[10px] gap-[10px] items-center justify-center">
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
      <button
        className="min-w-[135px] min-h-[30px] rounded-[10px] text-center text-base text-black font-medium bg-[#E4E2DD] hover:bg-[#E4E2DD]/70 transition-all duration-300 ease-in"
        type="submit"
      >
        搜尋
      </button>
    </form>
  );
};

export default SearchBar;
