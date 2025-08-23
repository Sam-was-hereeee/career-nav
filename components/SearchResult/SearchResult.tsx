import React from "react";
import ProfileResult from "./ProfileResult";
import ArticleColumn from "../shared_components/ArticleColumn";

const SearchResult = () => {
  return (
    <div className="flex flex-col w-full">
      <ProfileResult />
      {/* <ArticleResult /> */}
      <ArticleColumn />
    </div>
  );
};

export default SearchResult;
