"use client";

import WishBox from "@components/WishBox/WishBox";
import SearchResult from "@components/SearchResult/SearchResult";
import SearchProfile from "@components/SearchProfile/SearchProfile";

const CareerProfilePage = () => {
  return (
    <div>
      <SearchProfile />
      <div className="flex w-full">
        <div></div>
        <SearchResult />
      </div>
      <WishBox />
    </div>
  );
};

export default CareerProfilePage;
