"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NotFound404 = () => {
  const router = useRouter();

  return (
    <div className="w-full h-[565px] flex flex-col items-center bg-white gap-[36px]">
      <h2 className="text-[64px]/[35px] font-semibold mt-[106px]">404</h2>
      <p className="text-[16px]/[25px] font-normal text-[#5F6368]">
        Page Not Found
      </p>
      <button
        onClick={() => {
          router.push("/");
        }}
        className="w-[136px] h-[50px] rounded-[20px] bg-[#728594] text-white"
      >
        返回首頁
      </button>
    </div>
  );
};

export default NotFound404;
