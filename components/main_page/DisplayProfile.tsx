import React from "react";
import Profile from "../shared_components/Profile";
import Link from "next/link";

const DisplayProfile = () => {
  const profileSet1 = {
    name: ["行銷經理", "數據分析師", "UX 設計師"],
    career: ["行銷", "數據分析", "產品設計"],
    description: [
      "大學期間的專案經驗\n助我進入外商公司",
      "從台大外文系到\n歐洲數據科學碩士",
      "以突出的作品集\n爭取接案機會",
    ],
    avatarImg: [
      "/avatarImgTest/avatar4.jpg",
      "/avatarImgTest/avatar4.jpg",
      "/avatarImgTest/avatar4.jpg",
    ],
  };
  const profileSet2 = {
    name: ["軟體工程師", "插畫家", "社群媒體創作者"],
    career: ["資訊工程", "藝術創作", "自媒體"],
    description: [
      "創創學程\n讓我找到第一份實習",
      "休學一年自學動畫\n開拓數位遊牧職涯",
      "從每天一篇文開始的\n個人品牌歷程",
    ],
    avatarImg: [
      "/avatarImgTest/avatar4.jpg",
      "/avatarImgTest/avatar4.jpg",
      "/avatarImgTest/avatar4.jpg",
    ],
  };
  return (
    <div className="flex flex-col w-full h-[1012px] px-[130px] py-[40px] gap-[40px] items-center">
      <div className="flex flex-col w-full text-nowrap items-center">
        <h1 className="text-[40px] font-bold">精選職涯檔案</h1>
        <p className="text-base">探索多元領域的職涯地圖與經驗</p>
      </div>
      <div className="flex flex-row w-940 h-341 gap-[40px]">
        {profileSet1.name.map((name, index) => (
          <Profile
            key={index}
            profileImg={profileSet1.avatarImg[index]}
            name={name}
            career={profileSet1.career[index]}
            description={profileSet1.description[index]}
          ></Profile>
        ))}
      </div>
      <div className="flex flex-row w-940 h-341 gap-[40px]">
        {profileSet2.name.map((name, index) => (
          <Profile
            key={index}
            profileImg={profileSet2.avatarImg[index]}
            name={name}
            career={profileSet2.career[index]}
            description={profileSet2.description[index]}
          ></Profile>
        ))}
      </div>
      <Link
        className="w-[240px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white text-center hover:bg-[#728594]/80 shadow-xl transition-all duration-300 ease-in"
        href="./login"
      >
        登入以閱讀更多
      </Link>
    </div>
  );
};

export default DisplayProfile;
