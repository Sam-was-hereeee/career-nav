"use client";
import React from "react";
import { useRouter } from "next/navigation";
const AboutPage = () => {
  const router = useRouter();
  return (
    <div>
      <div
        className={
          "w-2/3 px-10 mx-auto flex flex-col items-center justify-center mt-8"
        }
      >
        <h1 className="text-wrap text-2xl sm:text-3xl sm:text-nowrap font-semibold mt-[10px] whitespace-pre inline">
          {"您已成功註冊\n歡迎加入職屬！"}
        </h1>
        <div
          className={"w-full flex flex-row items-center justify-center mt-8"}
        >
          <img
            src={"/happy.svg"}
            alt={"thank you"}
            className={"py-4 mx-auto contain-content w-60"}
          ></img>
          <p className={"whitespace-pre inline text-center text-xl"}>
            {"我們相信，每段職涯經驗都是值得分享的故事。\n" +
              "職屬希望能讓文學院學生看見更多職業發展的可能性，\n" +
              "也讓前行者的足跡成為後來者的燈塔。"}
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            router.push("/");
          }}
          className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-6"
        >
          回到首頁
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
