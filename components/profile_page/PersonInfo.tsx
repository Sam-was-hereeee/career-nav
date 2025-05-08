"use client";

import React from "react";
import Image from "next/image";

interface Props {
  avatarURL?: string;
  name?: string;
  school?: string;
  major?: string;
  graduateYr?: number;
  occupation?: string;
  company?: string;
  industry?: string;
  field?: string;
  selfIntro?: string;
}

const PersonInfo = ({
  avatarURL,
  name,
  school,
  major,
  graduateYr,
  occupation,
  company,
  industry,
  field,
  selfIntro,
}: Props) => {
  const tags = [
    occupation ?? "（職業名稱）",
    company ?? "（公司名稱）",
    industry ?? "（工作產業）",
    field ?? "（專業領域）",
  ];

  return (
    <div className="relative md:static md:flex md:justify-between md:items-center w-full h-60 pt-3 pl-3 md:p-10 lg:p-28 bg-[#728594]">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5">
        <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden">
          <Image
            src={avatarURL ?? "/gray_bg.jpg"}
            alt="avatar"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          <h3 className="text-xl text-white">{name ?? "姓名"}</h3>
          <h5 className="text-sm text-white">
            {(school ?? "就讀學校") +
              " | " +
              (major ?? "主修科系") +
              " | " +
              (graduateYr ?? 2000) +
              "年畢業"}
          </h5>
          <div className="flex w-auto h-auto gap-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-20 h-6 md:w-24 rounded-lg bg-white"
              >
                <h5 className="text-sm text-nowrap">{tag}</h5>
              </div>
            ))}
          </div>
          <p className="text-sm text-white">
            {selfIntro ?? "（簡單介紹自己，或是一句能代表自己的話）"}
          </p>
        </div>
      </div>
      <button className="absolute md:static top-10 right-6 md:top-auto md:right-auto w-32 h-10 rounded-lg border text-sm text-white">
        編輯個人檔案
      </button>
    </div>
  );
};

export default PersonInfo;
