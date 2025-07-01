import Link from "next/link";
import React from "react";
import Image from "next/image";

const JoinSeniorBar = () => {
  return (
    <div className="w-full bg-[#F1F1EE] py-8 px-4 sm:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-[44px]">
      {/* Image */}
      <div className="w-1/2 max-w-30 sm:max-w-lg lg:max-w-[406px] max-h-sm aspect-square relative">
        <Image
          src="/join_senior.png"
          alt="join senior"
          className="object-contain"
          fill
        ></Image>
      </div>

      {/* Text Content */}
      <div className="w-full max-w-3xl flex flex-col text-black text-left">
        <h3 className="text-xl sm:text-2xl lg:text-[24px] font-bold text-[#474F56] mb-4 leading-snug">
          <span className="hidden sm:inline">
            職屬：攜手踏上屬於人文專長人才的職涯探險
          </span>
          <span className="sm:hidden">
            職屬：攜手踏上人文專長人才的職涯探險
          </span>
        </h3>

        <p className="text-sm sm:text-base text-[#5F6368] leading-loose sm:leading-relaxed space-y-2 mb-5 sm:mb-0">
          <span>
            我們期待看到文學院學生自信地踏上職涯旅程，在心儀的職業中，以人文精神與專業貢獻世界。
          </span>
          <br />
          <span className="hidden sm:inline">
            當全世界都在追逐新科技，選擇就讀文學院的我們，在研讀著幾世紀以前的文學、歷史、藝術。
            <br />
            我們之中，有人熱愛文化與藝術；有人懷著對創作的興趣，渴望發揮創意長才。我們相信人文學科的價值。
            <br />
            但當科技掛帥的世界都告訴我們，文組沒出路時，我們也不禁懷疑：在文學院的自己，未來在何方？
            <br />
          </span>
          <span className="font-bold mt-2 hidden sm:block">
            職屬因此而誕生。
            <br />
            來自台大文學院的我們，希望連結文學院在學的學生和就業學長姐：
            <br />
            由職屬學長姐的職業經驗傳承，協助在學的學生，找到屬於文學院學生們的職涯航道。
          </span>
          <span className="font-bold mt-2 block sm:hidden">
            職屬因此而誕生。
            <br />
            來自台大文學院的我們，希望連結在學的學生和就業學長姐：由職屬學長姐的職業經驗傳承，協助在學的學生，找到屬於文學院的職涯航道。
          </span>
        </p>

        <div className={"mt-2 flex-col flex gap-3 sm:flex-row sm:gap-3"}>
          <Link
            href="/register?is-senior=true"
            className="sm:mt-6 w-fit px-6 py-3 border-2 border-[#728594] rounded-2xl bg-[#728594] text-white text-lg font-bold self-center lg:self-start"
          >
            加入學長姐行列
          </Link>
          <Link
            href="/register?is-senior=false"
            className="sm:mt-6 w-fit px-6 py-3 border-2 border-[#728594] rounded-2xl bg-[#728594] text-white text-lg font-bold self-center lg:self-start"
          >
            成為學弟妹，找到你的職屬
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinSeniorBar;
