import React from "react";
import NaviBar from "../../components/NaviBar/NaviBar";
import SideBar from "../../components/SideBar/SideBar";
import WishBox from "../../components/WishBox/WishBox";
import Footer from "../../components/Footer/Footer";
import SearchResult from "../../components/SearchResult/SearchResult";
import SearchProfile from "../../components/SearchProfile/SearchProfile";

const CareerProfilePage = () => {
  return (
    <div>
      <NaviBar currentPage={1} />
      <div className="w-full h-[100px] min-h-[100px]" />
      <SearchProfile />
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
