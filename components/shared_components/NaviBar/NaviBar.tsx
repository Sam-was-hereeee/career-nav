import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import AccountBtn from "./AccountBtn";

interface Props {
  currentPage: number;
}

const NaviBar = ({ currentPage }: Props) => {
  const page = {
    title: ["主頁", "學長姐職涯檔案", "職業訪談", "關於職航", "更多"],
    href: ["/", "/careerProfile", "/interview", "/about", "/more"],
  };

  return (
      <div className="sticky top-0 w-full bg-[#F1F1EE] shadow z-50">
        <div className="max-w-screen-xl px-4 sm:px-0.5 sm:mx-0 lg:px-8 py-2
                  grid grid-cols-2 sm:grid-cols-[auto_1fr_auto] gap-y-2 sm:gap-4
                  items-center">

          {/* LOGO */}
          <Link href="/" className="col-start-1 col-span-2 row-start-1 flex items-center space-x-2">
            <img src="/icon.svg" className="w-10 h-10 sm:w-16 sm:h-16 object-contain"/>
            <div className="flex flex-col leading-tight">
              <h3 className="text-base sm:text-2xl font-semibold text-[#728594]">職屬 Step Senior</h3>
              <h6 className="text-[10px] sm:text-xs text-black">給文學院學生的職涯經驗分享平台</h6>
            </div>
          </Link>

          {/* ACCOUNT BUTTON */}
          <div className="col-start-2 sm:col-start-3 row-start-1 justify-self-end">
            <AccountBtn currentPage={currentPage}/>
          </div>

          {/* NAVIGATION + SEARCH */}
          <div
              className="col-span-2 sm:col-start-2 sm:row-start-1 flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 text-sm sm:text-base text-black">
            {page.title.map((title, index) => (
                <Link
                    key={index}
                    href={page.href[index]}
                    className={
                        "hover:font-bold transition-all duration-200 ease-in" +
                        (currentPage === index ? " font-bold" : "")
                    }
                >
                  {title}
                </Link>
            ))}

            {/* SEARCH hidden on mobile */}
            <div className="hidden sm:block">
              <SearchBar/>
            </div>
          </div>

        </div>
      </div>

  );
};

export default NaviBar;
