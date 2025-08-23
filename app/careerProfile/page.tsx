"use client";

import WishBox from "@components/WishBox/WishBox";
import SearchResult from "@components/SearchResult/SearchResult";
import ExploreProfile from "@/components/ExploreProfile/ExploreProfile";

const CareerProfilePage = () => {
  return (
    <div>
      <ExploreProfile />
      <div className="flex w-full">
        <div></div>
        <SearchResult />
      </div>
      <WishBox />
    </div>
  );
};

export default CareerProfilePage;
