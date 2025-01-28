import React from "react";
import NaviBar from "../component/NaviBar/NaviBar";
import ExploreProfile from "../component/ExploreProfile/ExploreProfile";
import SideBar from "../component/SideBar/SideBar";
import WishBox from "../component/WishBox/WishBox";
import Footer from "../component/Footer/Footer";
import SearchResult from "../component/SearchResult/SearchResult";

const CareerProfilePage = () => {
  return (
    <div>
      <NaviBar currentPage={1} />
      <div className="w-full h-[100px] min-h-[100px]" />
      <ExploreProfile />
      <div className="flex w-full h-[1850px]">
        <SideBar />
        <SearchResult />
      </div>
      <WishBox />
      <Footer />
    </div>
  );
};

export default CareerProfilePage;
