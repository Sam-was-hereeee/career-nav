"use client";

import React from "react";
import Footer from "@/components/Footer/Footer";
import NaviBar from "@/components/NaviBar/NaviBar";
import RegisterProgress from "@/components/RegisterInput/RegisterProgress";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // 防止頁面重新載入

        router.push("/register/seniorRegister/next");
    };

    return (
        <div>
            <NaviBar currentPage={5} />
            <div className="w-full h-[100px] min-h-[100px]" />
            <form
                onSubmit={handleSubmit}
                className="w-full h-[465px] pt-[45px] pb-[81px] my-[30px] flex flex-col items-center bg-white"
            >
                <h1 className="text-[24px]/[35px] font-semibold my-[10px]">
                    驗證碼已寄送至你的常用信箱
                </h1>
                <input
                    id="verifyCode"
                    name="verifyCode"
                    type="text"
                    placeholder="輸入驗證碼"
                    className="w-[391px] h-[45px] rounded-[8px] p-[10px] my-[10px] bg-[#F1F1EE]"
                    required
                />
                <p className="text-[14px]/[35px] font-normal text-[#5F6368]">
                    沒有收到驗證碼？
                    <button type="button" className="underline">
                        重新寄送
                    </button>
                </p>
                <RegisterProgress currentStep={1} />
                <div className="w-[349px] h-[68px] py-[10px] mb-[10px] flex justify-between">
                    <button
                        type="button"
                        onClick={() => {
                            router.back();
                        }}
                        className="w-[95px] h-[44px] py-[10px] gap-[10px] flex items-center text-base font-medium"
                    >
                        <img src="/arrow2.svg" className="w-[9.5px] h-[17px]" />
                        上一步
                    </button>
                    <button
                        type="submit"
                        className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-[60px]"
                    >
                        下一步
                    </button>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default Page;
