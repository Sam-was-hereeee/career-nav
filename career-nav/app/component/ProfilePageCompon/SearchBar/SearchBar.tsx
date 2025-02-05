import Link from "next/link";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center w-full h-[82px] gap-[60px] bg-black/60">
      <Link
        className="flex items-center justify-center w-[21px] h-[21px]"
        href="/careerProfile"
      >
        <img src="/backBtn.svg" alt="back" />
      </Link>
      <form>
        <input
          className="min-w-[360px] h-[36px] rounded-[10
          px] border-[1px] px-[12px] py-[8px] gap-[4px]"
          type="text"
          placeholder="｜搜尋職稱或領域"
        />
      </form>
    </div>
  );
};

export default SearchBar;
