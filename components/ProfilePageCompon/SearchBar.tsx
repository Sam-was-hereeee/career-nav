"use client";

import Link from "next/link";
import React from "react";
import TagSelect from "../shared_components/TagSelect";

const SearchBar = () => {
  return (
    <div className="flex items-center w-full h-[82px] bg-black/60">
      <Link
        className="flex items-center justify-center w-[21px] h-[21px] ml-[30px]"
        href="/careerProfile"
      >
        <img src="/backBtn.svg" alt="back" />
      </Link>
      <form className="flex items-center gap-[10px] p-[10px]">
        <input
          className="min-w-[360px] h-[36px] rounded-[10px] border-[1px] px-[12px] py-[8px] gap-[4px]"
          type="text"
          placeholder="｜搜尋職稱或領域"
        />
        <TagSelect id="region" option={[]} opValue={[]}>
          區域
        </TagSelect>
        <TagSelect id="career" option={[]} opValue={[]}>
          職業
        </TagSelect>
        <TagSelect id="industry" option={[]} opValue={[]}>
          產業
        </TagSelect>
        <TagSelect id="workMode" option={[]} opValue={[]}>
          工作模式
        </TagSelect>
        <TagSelect id="skill" option={[]} opValue={[]}>
          技能對應
        </TagSelect>
        <TagSelect id="corpType" option={[]} opValue={[]}>
          區域
        </TagSelect>
        <button
          className="w-[59px] h-[33px] rounded-[20px] text-center text-white bg-black hover:bg-white/20 transition-all duration-300 ease-in"
          type="submit"
        >
          搜尋
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
