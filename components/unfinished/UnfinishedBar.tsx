"use client";

import React from "react";
import { forwardRef, useRef } from "react";

interface Props {
  discription: string;
}

const UnfinishedBar = forwardRef<HTMLDialogElement, Props>(
  ({ discription }, ref) => {
    const closeDialog = () => {
      (ref as React.RefObject<HTMLDialogElement>)?.current?.close();
    };

    return (
      <dialog
        ref={ref}
        className="w-[480px] h-[224px] rounded-[20px] bg-[#D8D8D8]/85"
      >
        <div className="flex flex-col justify-center items-center gap-[16px]">
          <h3 className="text-[20px]/[35px] font-medium mt-[46px] whitespace-pre-line">
            {"本頁面尚未開放。\n敬請期待！"}
          </h3>
          <p>{discription}</p>
          <button
            onClick={closeDialog}
            className="w-[131px] h-[50px] rounded-[20px] text-center bg-[#728594]"
          >
            返回
          </button>
        </div>
      </dialog>
    );
  }
);

export default UnfinishedBar;
