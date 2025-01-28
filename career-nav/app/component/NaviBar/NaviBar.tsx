import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import AccountBtn from "./AccountBtn/AccountBtn";

interface Props {
  currentPage: number; //0、1、2、3、4 將目前所在頁面的navigation文字功能取消並加粗體
}

const NaviBar = ({ currentPage }: Props) => {
  return (
    <div className="flex fixed top-0 w-full h-[100px] items-center justify-between bg-white z-50">
      <div className="flex items-center">
        <div className="rounded-full bg-black/10 w-[43px] h-[43px] mr-2 ml-4"></div>
        <Link href="/">
          <img
            className="min-w-[396px] min-h-[68px]"
            src="/NaviBar/slogan.svg"
            alt="slogan"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex text-black text-base font-weight:400 text-nowrap gap-x-[40px] items-center">
          <Link
            className={
              "hover:font-bold" + (currentPage === 0 ? " font-bold" : "")
            }
            href="/"
          >
            主頁
          </Link>
          <Link
            className={
              "hover:font-bold" + (currentPage === 1 ? " font-bold" : "")
            }
            href="/careerProfile"
          >
            學長姐職涯檔案
          </Link>
          <Link
            className={
              "hover:font-bold" + (currentPage === 2 ? " font-bold" : "")
            }
            href="/interview"
          >
            職業訪談
          </Link>
          <Link
            className={
              "hover:font-bold" + (currentPage === 3 ? " font-bold" : "")
            }
            href="/about"
          >
            關於職航
          </Link>
          <Link
            className={
              "hover:font-bold" + (currentPage === 4 ? " font-bold" : "")
            }
            href="/more"
          >
            更多
          </Link>
          <SearchBar></SearchBar>
        </div>
        <AccountBtn></AccountBtn>
      </div>
    </div>
  );
};

export default NaviBar;
