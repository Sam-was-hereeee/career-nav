import React from "react";
import NaviBar from "../component/NaviBar/NaviBar";
import Footer from "../component/Footer/Footer";
import WishBox from "../component/WishBox/WishBox";
import SearchBar from "../component/ProfilePageCompon/SearchBar/SearchBar";
import PersonInfo from "../component/ProfilePageCompon/PersonInfo/PersonInfo";
import CareerMap from "../component/ProfilePageCompon/CareerMap/CareerMap";
import QA from "../component/ProfilePageCompon/QA/QA";
import CommentInput from "../component/ProfilePageCompon/CommentInput/CommentInput";

const page = () => {
  return (
    <div>
      <NaviBar currentPage={2} />
      <div className="w-full h-[100px] min-h-[100px]" />
      <SearchBar />
      <PersonInfo />
      <CareerMap />
      <QA />
      <CommentInput />
      <WishBox />
      <Footer />
    </div>
  );
};

export default page;
