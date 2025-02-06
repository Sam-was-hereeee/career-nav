"use client";

import React from "react";

const PersonInfo = () => {
  return (
    <div className="flex justify-center items-center w-full h-[240px] px-[170px] py-[60px] gap-[40px] bg-black/60">
      <div className="w-[100px] h-[100px] rounded-[50px] bg-[#D9D9D9]/50">
        <img className="" src="/" alt="" />
      </div>
      <div className="flex flex-col w-[600px] h-[112px] gap-[12px] text-white text-nowrap">
        <h1 className="text-[24px]/[32px] font-bold">中心哲</h1>
        {/* tag */}
        <p className="text-[16px]/[36px] font-medium">
          以突出的作品集爭取接案機會，正職之外還能累積 Side Projects
        </p>
      </div>
      <div className="flex flex-col items-center w-[164px] h-[120px] p-[10px] gap-[10px]">
        <button
          className="w-[144px] h-[45px] rounded-[8px] p-[12px] border-[1px] border-white text-white font-medium"
          type="button"
        >
          收藏
        </button>
        <button
          className="w-[144px] h-[45px] rounded-[8px] p-[12px] border-[1px] border-white text-white font-medium"
          type="button"
        >
          聯絡方式
        </button>
      </div>
    </div>
  );
};

export default PersonInfo;
