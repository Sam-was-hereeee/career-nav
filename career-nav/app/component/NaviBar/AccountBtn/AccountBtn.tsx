"use client";

import Link from "next/link";
import React from "react";

interface Props {
  currentPage: number;
}

const AccountBtn = ({ currentPage }: Props) => {
  return (
    <div>
      <Link
        className={
          "text-base font-bold hover:text-black transition-all duration-200 ease-in" +
          (currentPage === 5 ? " text-black" : " text-[#979797]")
        }
        href="/login"
      >
        登入/註冊
      </Link>
      <div
        className="w-[40px] h-[40px] rounded-full ml-4 mr-6"
        onClick={() => {
          console.log("account");
        }}
      >
        <img className="w-full h-full" src="/NaviBar/avatar.svg" />
      </div>
    </div>
  );
};

export default AccountBtn;
