import Link from "next/link";
import React from "react";
import InputBox from "./InputBox/InputBox";

const LoginInput = () => {
  return (
    <div className="flex w-full h-[586px] px-[70px] py-[52px] gap-[145px] bg-[#666666] justify-center items-center">
      <img className="min-w-[422px] min-h-[422px]" src="/loginBg.svg" />
      <div className="flex flex-col min-w-[521px] min-h-[482px] rounded-[20px] px-[10px] py-[40px] gap-[10px] bg-white/75 items-center">
        <h1 className="text-[24px]/[35px] font-semibold text-center whitespace-pre">
          {"登入職航\n享受專為文學院學生設計的服務"}
        </h1>
        <p className="text-[16px]/[30px] text-[#5F6368] text-center">
          還沒有帳號？
          <Link className="font-bold" href="/register">
            立即註冊
          </Link>
        </p>
        <InputBox />
      </div>
    </div>
  );
};

export default LoginInput;
