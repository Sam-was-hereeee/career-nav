import React from "react";
import NaviBar from "../component/NaviBar/NaviBar";
import Footer from "../component/Footer/Footer";
import WishBox from "../component/WishBox/WishBox";
import SearchBar from "../component/ProfilePageCompon/SearchBar/SearchBar";

const page = () => {
  return (
    <div>
      <NaviBar currentPage={2} />
      <div className="w-full h-[100px] min-h-[100px]" />
      <SearchBar />
      <WishBox />
      <Footer />
    </div>
  );
};

export default page;
