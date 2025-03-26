"use client";

import React from "react";
import Footer from "@/components/Footer/Footer";
import NaviBar from "@/components/NaviBar/NaviBar";
import Link from "next/link";
import RegisterProgress from "@/components/RegisterInput/RegisterProgress";
import TextInput from "@/components/RegisterInput/TextInput";
import SelectInput from "@/components/RegisterInput/SelectInput";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // 防止頁面重新載入

    router.push("/register/seniorRegister/next/next/next");
  };

  return (
    <div>
      <NaviBar currentPage={5} />
      <div className="w-full h-[100px] min-h-[100px]" />
      <form
        onSubmit={handleSubmit}
        className="w-full h-[1540px] py-[60px] flex flex-col items-center bg-white"
      >
        <h1 className="w-[532px] text-[32px]/[40px] font-semibold text-nowrap my-[10px]">
          創建個人檔案，分享自己的職涯軌跡
        </h1>
        <RegisterProgress currentStep={2} />

        <h2 className="text-[20px]/[30px] font-bold">個人資訊</h2>
        <TextInput
          id="name"
          description="您在此輸入的本名，不會公開於個人檔案"
          placeholder="輸入中文全名"
          required={true}
        >
          本名
        </TextInput>
        <TextInput
          id="nickName"
          description="請輸入您想公開在個人檔案上的名字"
          placeholder="輸入本名或暱稱"
          required={true}
        >
          個人檔案顯示名稱
        </TextInput>

        <h2 className="text-[20px]/[30px] font-bold mt-[50px]">職涯資訊</h2>
        <SelectInput
          id="career"
          placeholder="選擇職業名稱"
          optionArr={[]}
          valueArr={[]}
          required={true}
        >
          目前您的職業名稱？
        </SelectInput>
        <SelectInput
          id="industry"
          placeholder="選擇工作產業"
          optionArr={[]}
          valueArr={[]}
          required={true}
        >
          目前您的工作產業？
        </SelectInput>
        <TextInput
          id="corporationName"
          placeholder="輸入您的公司或機構，非必填。"
          required={false}
        >
          目前您所在的公司/機構名稱？
        </TextInput>
        <SelectInput
          id="field"
          description="選擇至多 5 項專業領域"
          placeholder="選擇專業領域"
          optionArr={[]}
          valueArr={[]}
          required={false}
        >
          您的專業領域？
        </SelectInput>
        <TextInput
          id="introduction"
          description="讓學弟妹更快速地認識您"
          placeholder="輸入個人簡介"
          required={false}
        >
          間單介紹自己，或是一句能代表自己的話
        </TextInput>

        <div className="w-[349px] h-[68px] py-[10px] mt-[100px] mb-[10px] flex justify-between">
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

export default page;
