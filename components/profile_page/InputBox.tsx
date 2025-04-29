"use client";

import React from "react";

const InputBox = () => {
  return (
    <form className="flex items-center gap-[20px]">
      <input
        className="w-[608px] h-[50px] rounded-[10px] p-[10px] gap-[10px] bg-[#D9D9D9]/30"
        type="text"
        placeholder="留下你的想法..."
      />
      <button
        className="w-[123px] h-[48px] rounded-[20px] p-[12px] bg-black text-white"
        type="submit"
      >
        留言
      </button>
    </form>
  );
};

export default InputBox;
