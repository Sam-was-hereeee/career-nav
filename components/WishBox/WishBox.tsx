import React from "react";
import WishInput from "./WishInput";

const WishBox = () => {
  return (
    <div className="flex w-full h-[268px] px-[170px] py-[60px] bg-[#E4E2DD] justify-center items-center">
      <div className="flex flex-col min-w-[547px] h-[120px] gap-[24px] text-nowrap">
        <h1 className="text-[40px]/[48px] font-bold">
          沒看到自己感興趣的
          <br />
          職位或產業？
        </h1>
        <p className="text-base font-normal">
          告訴我們你的職業目標，我們會盡力尋找可以給你指引的學長姐。
        </p>
      </div>
      <WishInput />
    </div>
  );
};

export default WishBox;
