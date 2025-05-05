"use client";

import React, {useState} from "react";
import {insertWish} from "@lib/wishbox/actions";
import toast from "react-hot-toast";

const WishInput = () => {
    const [wish, setWish] = useState("");
    const handleSubmit = async () => {
        const {data, error} = await insertWish(wish);
        if (error) {
            toast.error(error.message);
            return;
        }
        toast.success("收到你的願望嘍～我們會努力達成的～")
        setWish("");
    }
  return (
    <div className="flex flex-col min-w-40 min-h-[124px] gap-[20px] content-center items-center">
      <label
        className="w-full h-[56px] py-[10px] items-center"
        htmlFor="wishInput"
      >
        <input
          id="wishInput"
          name="wishInput"
          value={wish}
          onChange={e => setWish(e.target.value)}
          className="w-full h-[36px] border-[1px] broder-black/10 px-[12px] py-[8px]"
          type="text"
          placeholder="我希望可以找到...,我希望你們可以有一個...頁面"
        />
      </label>
      <button
        className="w-[124px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white text-center hover:bg-[#728594]/80 shadow-lg transition-all duration-300 ease-in"
        type="button"
        onClick={handleSubmit}
      >
        許願
      </button>
    </div>
  );
};

export default WishInput;
