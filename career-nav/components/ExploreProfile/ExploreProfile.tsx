import React from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";

const ExploreProfile = () => {
  return (
    <div className="flex flex-col w-full h-[317px] bg-black/60 px-[130px] py-[40px] gap-[14px] items-center text-nowrap">
      <h1 className="text-[40px] font-bold text-white">探索學長姐職涯檔案</h1>
      <p className="text-base font-normal text-white">
        學長姐指引，讓你能更有自信地規劃職涯、進行跨領域嘗試
      </p>
      <SearchBar />
      <Link
        className="w-[240px] h-[48px] bg-white/0 hover:bg-white/20 transition-all duration-300 ease-in text-[#D9D9D9] text-center border-[1px] border-[#D9D9D9] rounded-[20px] p-[12px]"
        href="/careerProfile"
      >
        查看所有職涯檔案
      </Link>
    </div>
  );
};

export default ExploreProfile;
