"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import SideBar from "@components/SideBar/SideBar";
import WishBox from "@components/WishBox/WishBox";
import SearchResult from "@components/SearchResult/SearchResult";
import SearchProfile from "@components/SearchProfile/SearchProfile";
import UnfinishedBar from "@/components/unfinished/UnfinishedBar";

const CareerProfilePage = () => {
  const router = useRouter();
  const unfinishedBarRef = useRef<HTMLDialogElement>(null);

  const closeDialog = () => {
    router.push("/");
  };

  useEffect(() => {
    unfinishedBarRef.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div>
      <div className="w-full h-[100px] min-h-[100px]" />
      <SearchProfile />
      <div className="flex w-full h-[1850px]">
        <SideBar />
        <SearchResult />
      </div>
      <WishBox />
      <UnfinishedBar
        ref={unfinishedBarRef}
        discription="更多精彩功能即將上線，敬請期待～"
        btnClicked={closeDialog}
      />
    </div>
  );
};

export default CareerProfilePage;
