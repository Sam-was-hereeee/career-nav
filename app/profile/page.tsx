import React from "react";
import WishBox from "@components/WishBox/WishBox";
import SearchBar from "@components/profile_page/SearchBar";
import PersonInfo from "@components/profile_page/PersonInfo";
import CareerMap from "@components/profile_page/CareerMap";
import QA from "@components/profile_page/QA";
import CommentInput from "@components/profile_page/CommentInput";

const Page = () => {
  return (
    <div>
      <div className="w-full h-[100px] min-h-[100px]" />
      <SearchBar />
      <PersonInfo />
      <CareerMap />
      <QA />
      <CommentInput />
      <WishBox />
    </div>
  );
};

export default Page;
