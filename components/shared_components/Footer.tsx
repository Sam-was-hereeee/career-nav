"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import UnfinishedBar from "../unfinished/UnfinishedBar";

const Footer = () => {
  const router = useRouter();
  const unfinishedRef = useRef<HTMLDialogElement>(null);

  const goToAboutUs = () => {
    router.push("/#AboutUs");
  };

  const openDialog = () => {
    unfinishedRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    unfinishedRef.current?.close();
    document.body.style.overflow = "";
  };

  return (
    <>
      <div className="flex flex-col w-full h-[316px] bg-[#E4E2DD] border-t-[1px] border-[#D9D9D9] items-center justify-end">
        <footer className="w-[524px] h-[80px] text-[16px]/[40px] font-normal text-center">
          <div className="flex justify-center">
            <button onClick={goToAboutUs}>關於我們</button>
            <p className="whitespace-pre">{" | "}</p>
            <button
              onClick={() => {
                openDialog();
              }}
            >
              常見問題
            </button>
            <p className="whitespace-pre">{" | "}</p>
            <button
              onClick={() => {
                openDialog();
              }}
            >
              隱私問題
            </button>
          </div>
          <p>台大職航團隊 © 2025</p>
        </footer>
      </div>
      <UnfinishedBar
        ref={unfinishedRef}
        discription="這個頁面在做的事"
        btnClicked={closeDialog}
      />
    </>
  );
};

export default Footer;
