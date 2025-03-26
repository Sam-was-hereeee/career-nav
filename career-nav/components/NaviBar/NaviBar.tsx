import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import AccountBtn from "./AccountBtn";

interface Props {
  currentPage: number; //0、1、2、3、4、5(login/register) 將目前所在頁面的navigation文字功能取消並加粗體
}

const NaviBar = ({ currentPage }: Props) => {
  let page = {
    title: ["主頁", "學長姐職涯檔案", "職業訪談", "關於職航", "更多"],
    href: ["/", "/careerProfile", "/interview", "/about", "/more"],
  };

  return (
    <div className="flex fixed top-0 w-full h-[100px] items-center justify-between bg-[#F1F1EE] z-50">
      <div className="flex items-center">
        <div className="rounded-full bg-black/10 w-[43px] h-[43px] mr-2 ml-4"></div>
        <Link href="/">
          <img
            className="min-w-[302px] min-h-[67px]"
            src="/NaviBar/slogan.svg"
            alt="slogan"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex text-black text-base font-weight:400 text-nowrap gap-x-[40px] items-center">
          {page.title.map((title, index) => (
            <Link
              className={
                "hover:font-bold transition-all duration-200 ease-in" +
                (currentPage === index ? " font-bold" : "")
              }
              key={index}
              href={page.href[index]}
            >
              {title}
            </Link>
          ))}
          <SearchBar></SearchBar>
        </div>
        <AccountBtn currentPage={currentPage} />
      </div>
    </div>
  );
};

export default NaviBar;
