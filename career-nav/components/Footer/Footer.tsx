import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-[316px] bg-[#D9D9D9]/50 border-t-[1px] border-[#D9D9D9] items-center justify-end">
      <footer className="w-[524px] h-[80px] text-[16px]/[40px] font-normal text-center">
        <p>
          <Link href="/">關於我們</Link> | <Link href="/">常見問題</Link>
          {" | "}
          <Link href="/">隱私中心</Link>
        </p>
        <p>台大職航團隊 © 2025</p>
      </footer>
    </div>
  );
};

export default Footer;
