"use client";

import React from "react";

const InputBox = () => {
  return (
    <div className="flex flex-col w-[390px] h-[282px] p-[10px] gap-[10px] items-center">
      <div className="flex w-[370px] h-[44px] p-[10px] justify-center">
        <button className="w-[195px] h-[17px] text-center">在學生</button>
        <button className="w-[195px] h-[17px] text-center">已畢業學長姊</button>
      </div>
    </div>
  );
};

export default InputBox;
