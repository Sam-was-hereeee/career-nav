"use client";

import React from "react";
import Footer from "@/app/component/Footer/Footer";
import NaviBar from "@/app/component/NaviBar/NaviBar";
import Link from "next/link";
import RegisterProgress from "@/app/component/RegisterInput/RegisterProgress";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // 防止頁面重新載入

    router.push("/");
  };

  return (
    <div>
      <NaviBar currentPage={5} />
      <div className="w-full h-[100px] min-h-[100px]" />
      <form
        onSubmit={handleSubmit}
        className="w-full h-[922px] py-[52px] flex flex-col items-center bg-white"
      >
        <h1 className="text-[32px]/[40px] font-semibold">
          是否以非公開形式，分享聯絡資訊？
        </h1>
        <RegisterProgress currentStep={3} />
        <div className="text-[13px]/[150%] space-y-6 text-center text-nowrap mb-[70px]">
          <p className="text-[#000000]">
            成為「職航」的引航學長姐後，
            <br />
            本平台
            <span className="font-bold">
              不會主動於公開網頁上顯示您的聯絡資訊
            </span>
            。<br />
            即，任何人沒有經過身份驗證、沒有經過帳號與密碼登入，
            <br />
            是無法任意瀏覽您的個人檔案的。
          </p>

          <p className="text-[#000000]">
            若您願意留下聯絡資訊，
            <span className="font-bold">
              您可自由決定是否接受學弟妹的聯絡邀請。
            </span>
            <br />
            只有在您同意邀請後，您的個人頁面才會顯示聯絡方式，
            <br />
            供學弟妹查看並聯繫您。
          </p>
        </div>

        {/*要改成dialog*/}
        <button
          type="button"
          className="w-[390px] h-[40px] mb-[12px] p-[10px] text-[13px]/[150%] font-normal text-center text-nowrap rounded-[8px] bg-[#B2BEC180] border-[1px] border-[#979797]"
        >
          個資保護聲明與規約條款
        </button>

        <p className="text-[13px]/[150%] mb-[30px] text-normal text-[#5F6368] text-nowrap whitespace-pre-line">
          {
            "注意事項：當您填寫並同意送出註冊資料後，即表示您已閱讀、\n瞭解並同意接受本服務蒐集、處理及使用您的個人資料，以及雙\n方之權利與義務。"
          }
        </p>
        <label
          htmlFor="agreement"
          className="flex items-center justify-center w-[390px] h-[81px] pl[55px] pr-[10px] py-[10px] rounded-[8px] bg-[#F1F1EE] border-[1px] border-[#D7D8D9]"
        >
          <input
            id="agreement"
            name="agreement"
            value="check"
            type="checkbox"
            className="w-[36px] h-[36px] mr-[15px] rounded-[4px] border-[3px] border-[#596670]"
            required
          />
          <p className="text-[13px]/[150%] font-bold text-[#596670] text-nowrap whitespace-pre-line">
            {"我同意在接受學弟妹的聯絡邀請後，\n於個人頁面顯示聯絡信箱給對方"}
          </p>
        </label>

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
            完成註冊
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default page;
