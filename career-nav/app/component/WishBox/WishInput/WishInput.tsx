"use client";

import React from "react";

const WishInput = () => {
  return (
    <div className="flex flex-col min-w-[393px] min-h-[124px] gap-[20px]">
      <label
        className="flex w-full h-[56px] py-[10px] items-center"
        htmlFor="wishInput"
      >
        <input
          id="wishInput"
          name="wishInput"
          className="w-full h-[36px] border-[1px] broder-black/10 px-[12px] py-[8px]"
          type="text"
          placeholder="定下你的職涯目標"
        />
      </label>
      <button
        className="w-[124px] h-[48px] rounded-[20px] p-[12px] bg-black text-white text-center"
        type="submit"
      >
        許願
      </button>
    </div>
  );
};

export default WishInput;
