import Link from "next/link";
import React from "react";
import InputBox from "./InputBox";

const LoginInput = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full px-[70px] py-[52px] gap-4 justify-center items-center">
      <img className="hidden sm:visible order-2 sm:order-1 w-60 h-60 mt-3 sm:min-w-[422px] sm:min-h-[422px]" src="/loginBg.svg" />
        <div
            className="flex flex-col sm:flex-col min-w-[521px] min-h-[482px] rounded-[20px] px-[10px] py-[40px] gap-[10px] items-center">
            <h1 className="text-[24px]/[35px] font-semibold text-center whitespace-pre">
                {"登入職屬\n享受專為文學院學生設計的服務"}
            </h1>
            <p className="text-[16px]/[30px] text-[#5F6368] text-center">
                還沒有帳號？
                <Link className="font-bold" href="/register">
                    立即註冊
                </Link>
            </p>
            <img className="visible sm:invisible w-60 h-60 mt-3 sm:min-w-[422px] sm:min-h-[422px]"
                 src="/loginBg.svg"/>
            <InputBox/>
        </div>
    </div>
  );
};

export default LoginInput;
