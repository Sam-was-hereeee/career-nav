import React from "react";
import ProfileResult from "./ProfileResult";
import ArticleResult from "./ArticleResult";

const SearchResult = () => {
  return (
    <div className="flex flex-col w-full min-w-[1043px] h-[1850px]">
      <ProfileResult />
      <ArticleResult />
    </div>
  );
};

export default SearchResult;
