import React from "react";

const AboutUs = () => {
  return (
      <div
          id="AboutUs"
          className="w-full py-12 flex flex-col justify-center items-center gap-[33px] bg-[#F1F1EE]"
      >
        <h3 className="text-[32px]/[120%] font-bold text-black text-center text-nowrap">
          關於我們
        </h3>
        <p className="text-[16px]/[150%] font-normal text-black text-center px-5 sm:text-nowrap">
          我們是一群來自台大文學院與管理學院的學生，渴望打造更友善的職涯探索環境。
          <br />
          我們希望科系背景、職涯經驗的差距不再是進入心儀職業的阻礙，
          <br />
          而是可以透過分享、傳承，轉化為陪伴學生邁向理想職業的動力。
        </p>

        {/* 追蹤我們 */}
        <div className="flex flex-col items-center gap-2 mt-6">
          <p className="text-[16px]/[150%] font-semibold text-black">
            追蹤我們
          </p>
          <div className="flex gap-6">
            <a
                href="https://www.instagram.com/step.senior/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img
                  src="/icon/instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6 hover:opacity-70"
              />
            </a>
            <a
                href="https://www.threads.com/@step.senior?xmt=AQGzImR-myeNS3_nyRQoGSjJ4T5rQX5F9Jx3mRAi3r50SCc"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img
                  src="/icon/threads.svg"
                  alt="Threads"
                  className="w-6 h-6 hover:opacity-70"
              />
            </a>
            <a
                href="https://www.linkedin.com/company/%E8%81%B7%E8%88%AA"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img
                  src="/icon/linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6 hover:opacity-70"
              />
            </a>
          </div>
        </div>
        <img
            className="w-4/5 rounded-[20px]"
            src="/group_photo.svg"
            alt="group photo"
        />
        <p className="text-[16px]/[150%] font-normal text-[#5F6368] text-center text-nowrap">
          職屬初期團隊 2024 年合照
        </p>

      </div>
  );
};

export default AboutUs;
