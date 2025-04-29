import React from "react";
import Profile from "../shared_components/Profile";
import Link from "next/link";

const DisplayProfile = () => {
    const profiles = [
        {
            name: "行銷經理",
            career: "行銷",
            description: "大學期間的專案經驗\n助我進入外商公司",
            avatarImg: "/avatar4.jpg",
        },
        {
            name: "數據分析師",
            career: "數據分析",
            description: "從台大外文系到\n歐洲數據科學碩士",
            avatarImg: "/avatar4.jpg",
        },
        {
            name: "UX 設計師",
            career: "產品設計",
            description: "以突出的作品集\n爭取接案機會",
            avatarImg: "/avatar4.jpg",
        },
        {
            name: "軟體工程師",
            career: "資訊工程",
            description: "創創學程\n讓我找到第一份實習",
            avatarImg: "/avatar4.jpg",
        },
        {
            name: "插畫家",
            career: "藝術創作",
            description: "休學一年自學動畫\n開拓數位遊牧職涯",
            avatarImg: "/avatar4.jpg",
        },
        {
            name: "社群媒體創作者",
            career: "自媒體",
            description: "從每天一篇文開始的\n個人品牌歷程",
            avatarImg: "/avatar4.jpg",
        },
    ];

    return (
        <div className="w-full px-4 sm:px-8 lg:px-[100px] py-10 flex flex-col gap-10 justify-center items-center">

            {/* Title Area */}
            <div className="text-center space-y-2 justify-self-center">
                <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold">
                    精選職涯檔案
                </h1>
                <p className="text-sm sm:text-base">
                    探索多元領域的職涯地圖與經驗
                </p>
            </div>

            {/* Profile Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
                {profiles.map((profile, index) => (
                    <Profile
                        key={index}
                        profileImg={profile.avatarImg}
                        name={profile.name}
                        career={profile.career}
                        description={profile.description}
                    />
                ))}
            </div>

            {/* CTA Button */}
            <div className="justify-self-center">
                <Link
                    className="px-6 py-3 rounded-[20px] bg-[#728594] text-white text-sm sm:text-base text-center hover:bg-[#728594]/80 shadow transition-all duration-300 ease-in"
                    href="./login"
                >
                    登入以閱讀更多
                </Link>
            </div>
        </div>
    );
};

export default DisplayProfile;
