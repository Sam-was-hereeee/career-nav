import React from "react";
import WishBox from "@components/WishBox/WishBox";
import PersonInfo from "@components/profile_page/PersonInfo";
import ExperienceBox from "@/components/profile_page/ExperienceBox";
import ExperienceEntry from "@/components/profile_page/ExperienceEntry";
import SearchBar from "@/components/profile_page/SearchBar";

const Page = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <PersonInfo />
      <div className="flex flex-col h-auto py-10 gap-8 items-center">
        <ExperienceBox type="工作經驗" isEditable={false}>
          <ExperienceEntry
            experience="IBM"
            occupation="Product Marketing Specialist"
            period="2022-Present"
          />
          <ExperienceEntry />
        </ExperienceBox>

        <ExperienceBox type="實習經驗" isEditable={false}>
          <ExperienceEntry />
          <ExperienceEntry />
        </ExperienceBox>

        <ExperienceBox type="社團經驗" isEditable={false}></ExperienceBox>

        <ExperienceBox type="其他經驗" isEditable={false}>
          <ExperienceEntry />
        </ExperienceBox>
      </div>
      <WishBox />
    </div>
  );
};

export default Page;
