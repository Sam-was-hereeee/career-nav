import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import AccountBtn from "./AccountBtn";

interface Props {
  currentPage: number; //0、1、2、3、4、5(login/register) 將目前所在頁面的navigation文字功能取消並加粗體
}

const NaviBar = ({ currentPage }: Props) => {
  const page = {
    title: ["主頁", "學長姐職涯檔案", "職業訪談", "關於職航", "更多"],
    href: ["/", "/careerProfile", "/interview", "/about", "/more"],
  };

  return (
    <div className="flex fixed top-0 w-full h-[100px] items-center justify-between bg-[#F1F1EE] shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)] z-50">
      <div className="flex items-center">
        <Link className="flex items-center ml-[20px]" href="/">
          <img
            className="min-w-[76px] min-h-[72px]"
            src="/icon.svg"
            alt="icon"
          />
          <div className="flex flex-col min-w-[334px] min-h-[67px] p-[10px] gap-[12px]">
            <h3 className="text-[24px]/[120%] font-semibold text-[#728594]">
              職屬 Step Senior
            </h3>
            <h6 className="text-[11px]/[0px] font-normal text-black">
              給文學院學生的職涯經驗分享平台
            </h6>
          </div>
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
