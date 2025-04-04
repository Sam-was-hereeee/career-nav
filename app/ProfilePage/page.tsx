import React from "react";
import NaviBar from "@components/NaviBar/NaviBar";
import Footer from "@components/Footer/Footer";
import WishBox from "@components/WishBox/WishBox";
import SearchBar from "@components/ProfilePageCompon/SearchBar";
import PersonInfo from "@components/ProfilePageCompon/PersonInfo";
import CareerMap from "@components/ProfilePageCompon/CareerMap";
import QA from "@components/ProfilePageCompon/QA";
import CommentInput from "@components/ProfilePageCompon/CommentInput";

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
