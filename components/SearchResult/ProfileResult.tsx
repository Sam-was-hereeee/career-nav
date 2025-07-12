import React from "react";
import Profile from "../shared_components/Profile";
import ResultPageBtn from "./ResultPageBtn";
import { ProfileContainer } from "../shared_components/ProfileContainer";

const ProfileResult = () => {
  const test = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="flex flex-col w-full px-[40px] py-[30px] gap-[40px] items-center">
      <div className="flex flex-col w-full h-[82px] gap-[10px] text-center">
        <h1 className="text-[40px]/[48px] font-bold">資訊軟體產業</h1>
        <p className="text-base font-normal">共有 20 筆資料</p>
      </div>
      <ProfileContainer gridcols={2} gridcolsSm={3}>
        {test.map((profile, index) => (
          <Profile
            key={index}
            profileImg="/avatar4.jpg"
            name="name"
            career="career"
            description="description"
          />
        ))}
      </ProfileContainer>
      <ResultPageBtn />
    </div>
  );
};

export default ProfileResult;
