"use client";

import React from "react";
import Footer from "@/app/component/Footer/Footer";
import NaviBar from "@/app/component/NaviBar/NaviBar";
import Link from "next/link";
import RegisterProgress from "@/app/component/RegisterInput/RegisterProgress";
import TextInput from "@/app/component/RegisterInput/TextInput";
import SelectInput from "@/app/component/RegisterInput/SelectInput";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // 防止頁面重新載入

    router.push("/register/seniorRegister/next/next");
  };

  return (
    <div>
      <NaviBar currentPage={5} />
      <div className="w-full h-[100px] min-h-[100px]" />
      <form
        onSubmit={handleSubmit}
        className="w-full h-[1280px] py-[60px] flex flex-col items-center bg-white"
      >
        <h1 className="w-[532px] text-[32px]/[40px] font-semibold text-nowrap my-[10px] whitespace-pre-line">
          {"歡迎，感謝您願意引導學弟妹啟航！\n創建個人檔案，分享自己的職涯軌跡"}
        </h1>
        <RegisterProgress currentStep={2} />

        <h2 className="text-[20px]/[30px] font-bold">學經歷資訊</h2>
        <SelectInput
          id="graduateYr"
          placeholder="選擇入學年份"
          optionArr={["2000", "2025"]}
          valueArr={["2000", "2025"]}
          required={true}
        >
          畢業年份
        </SelectInput>
        <SelectInput
          id="school"
          placeholder="選擇學校"
          optionArr={[]}
          valueArr={[]}
          required={true}
        >
          畢業學校
        </SelectInput>
        <SelectInput
          id="major"
          placeholder="選擇科系"
          optionArr={[]}
          valueArr={[]}
          required={true}
        >
          畢業科系
        </SelectInput>
        <SelectInput
          id="doubleMajor"
          placeholder="選擇雙主修科系，若無，則跳過。"
          optionArr={[]}
          valueArr={[]}
          required={false}
        >
          雙主修科系
        </SelectInput>
        <SelectInput
          id="minor"
          placeholder="選擇輔系，若無，則跳過。"
          optionArr={[]}
          valueArr={[]}
          required={false}
        >
          輔修科系
        </SelectInput>
        <TextInput id="studentID" placeholder="輸入學號" required={true}>
          學號
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
