"use client";

import Link from "next/link";
import React, { useState } from "react";

const InputBox = () => {
  const [btnClicked, setBtnClicked] = useState(1); //0,1,2
  return (
    <div className="flex flex-col w-[390px] h-[282px] p-[10px] gap-[10px] items-center">
      <form className="flex flex-col w-[390px] h-[282px] p-[10px] gap-[10px] items-center">
        <div className="flex w-[370px] h-[44px] p-[10px] justify-center">
          <button
            className={
              "w-[149.5px] h-[34px] text-center border-b-black" +
              (btnClicked === 1
                ? " border-b-[5px] font-bold"
                : " border-b-[1px]")
            }
            type="button"
            onClick={() => {
              setBtnClicked(1);
            }}
          >
            在學生
          </button>
          <button
            className={
              "w-[149.5px] h-[34px] text-center border-b-black" +
              (btnClicked === 2
                ? " border-b-[5px] font-bold"
                : " border-b-[1px]")
            }
            type="button"
            onClick={() => {
              setBtnClicked(2);
            }}
          >
            已畢業學長姊
          </button>
        </div>
        <div className="flex flex-col items-center w-[284px] h-[130px] p-[10px] gap-[10px]">
          <input
            className="min-w-[256px] h-[30px] rounded-[10px] p-[10px] bg-[#D9D9D9]/50"
            type="text"
            placeholder="輸入臺大學號"
            required
          />
          <input
            className="min-w-[256px] h-[30px] rounded-[10px] p-[10px] bg-[#D9D9D9]/50"
            type="password"
            placeholder="輸入密碼"
            required
          />
          <Link href="/">忘記密碼？</Link>
        </div>
        <button
          className="w-[116px] h-[48px] rounded-[20px] p-[12px] text-white bg-black hover:bg-black/40 transition-all ease-in duration-300"
          type="submit"
          onClick={() => {
            console.log("hi");
          }}
        >
          登入
        </button>
      </form>
    </div>
  );
};

export default InputBox;
