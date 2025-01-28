import test from "node:test";
import React from "react";
import Profile from "../../Profile/Profile";

const ProfileResult = () => {
  let test = [0, 1, 2];
  return (
    <div className="flex flex-col w-full px-[40px] py-[30px] gap-[40px] items-center">
      <div className="flex flex-col w-full h-[82px] gap-[10px] text-center">
        <h1 className="text-[40px]/[48px] font-bold">資訊軟體產業</h1>
        <p className="text-base font-normal">共有 20 筆資料</p>
      </div>
      {test.map((profileBox, index) => (
        <div key={index} className="flex w-[963px] h-[341px] gap-[40px]">
          {test.map((profile, index) => (
            <Profile
              key={index}
              profileImg="/avatarImgTest/justin.jpg"
              name="中心哲"
              career="忠心耿耿"
              description="哈哈"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProfileResult;
