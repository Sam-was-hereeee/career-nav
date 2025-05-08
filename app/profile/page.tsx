import React from "react";
import WishBox from "@components/WishBox/WishBox";
import SearchBar from "@components/profile_page/SearchBar";
import PersonInfo from "@components/profile_page/PersonInfo";

const Page = () => {
  return (
    <div>
      <PersonInfo />
      <WishBox />
    </div>
  );
};

export default Page;
