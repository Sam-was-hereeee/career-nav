import React from "react";
import NaviBar from "@/components/shared_components/NaviBar/NaviBar";
import Footer from "@/components/shared_components/Footer";
import WishBox from "@components/WishBox/WishBox";
import SearchBar from "@components/profile_page/SearchBar";
import PersonInfo from "@components/profile_page/PersonInfo";
import CareerMap from "@components/profile_page/CareerMap";
import QA from "@components/profile_page/QA";
import CommentInput from "@components/profile_page/CommentInput";

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
