import React from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";

interface Props {
  mainPage?: boolean;
}

const ExploreProfile = ({ mainPage }: Props) => {
  return (
    <div className="flex flex-col w-full bg-[#728594] px-4 sm:px-12 lg:px-[130px] py-10 sm:py-[40px] gap-4 items-center text-center">
      {!mainPage && <div className="min-h-1"></div>}

      <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white">
        探索學長姐職涯檔案
      </h1>

      <p className="text-sm sm:text-base font-normal text-white max-w-xl">
        學長姐指引，讓你能更有自信地規劃職涯、進行跨領域嘗試
      </p>

      <div className="w-full max-w-lg sm:max-w-xl">
        <SearchBar mainPage={mainPage} />
      </div>

      {mainPage ? (
        <Link
          className="mt-4 px-12 py-3 rounded-2xl border border-[#D9D9D9] text-[#D9D9D9] text-sm sm:text-base font-medium hover:bg-white/20 transition-all duration-300 ease-in"
          href="/careerProfile"
        >
          查看所有職涯檔案
        </Link>
      ) : (
        <button className="w-[240px] h-[48px] rounded-[20px] p-[12px] text-center text-black bg-[#E4E2DD] hover:bg-[#E4E2DD]/80 transition-all duration-300 ease-in">
          搜尋
        </button>
      )}
    </div>
  );
};

export default ExploreProfile;
