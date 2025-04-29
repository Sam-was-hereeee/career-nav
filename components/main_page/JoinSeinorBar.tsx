import Link from "next/link";
import React from "react";

const JoinSeinorBar = () => {
  return (
    <div className="w-full h-[446px] flex items-center gap-[44px] bg-[#F1F1EE]">
      <img
        className="min-w[406px] min-h-[393px] ml-[30px]"
        src="/join_senior.svg"
        alt="join senior"
      />
      <div className="min-w-[683px] min-h-[186px] flex-col text-nowrap">
        <h3 className="text-[24px]/[31px] font-bold text-[#474F56] mb-[16px]">
          職屬：攜手踏上屬於人文專長人才的職涯探險
        </h3>
        <p className="text-[14px]/[31px] text-[#5F6368]">
          我們期待看到文學院學生自信地踏上職涯旅程，在心儀的職業中，以人文精神與專業貢獻世界。
          <br />
          當全世界都在追逐新科技，選擇就讀文學院的我們，在研讀著幾世紀以前的文學、歷史、藝術。
          <br />
          我們之中，有人熱愛文化與藝術；有人懷著對創作的興趣，渴望發揮創意長才。我們相信人文學科的價值。
          <br />
          但當科技掛帥的世界都告訴我們，文組沒出路時，我們也不禁懷疑：在文學院的自己，未來在何方？
          <br />
          職屬因此而誕生。
          <span className="font-bold">
            來自台大文學院的我們，希望連結文學院在學的學生和就業學長姐：
            <br />
            由職屬學長姐的職業經驗傳承，協助在學的學生，找到屬於文學院學生們的職涯航道。
          </span>
        </p>
        <Link
          href="./register"
          className="w-[240px] h-[50px] p-[12px] border-[3px] mt-[36px] rounded-[20px] flex justify-center items-center bg-[#728594] text-[20px]/[120%] font-bold text-white"
        >
          加入學長姐行列
        </Link>
      </div>
    </div>
  );
};

export default JoinSeinorBar;
