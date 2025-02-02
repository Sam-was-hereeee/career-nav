import React from "react";
import SearchBar from "./SearchBar/SearchBar";

const SearchProfile = () => {
  return (
    <div className="flex flex-col w-full h-[317px] bg-black/60 px-[130px] py-[40px] gap-[16px] items-center text-nowrap">
      <h1 className="text-[40px] font-bold text-white">探索學長姐職涯檔案</h1>
      <p className="text-base font-normal text-white">
        學長姐指引，讓你能更有自信地規劃職涯、進行跨領域嘗試
      </p>
      <SearchBar />
    </div>
  );
};

export default SearchProfile;
