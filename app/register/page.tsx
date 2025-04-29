"use client";

import React from "react";
import NaviBar from "@/components/shared_components/NaviBar/NaviBar";
import Footer from "@/components/shared_components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RegisterProgress from "@/components/RegisterInput/RegisterProgress";
import TextInput from "@/components/RegisterInput/TextInput";
import SelectInput from "@/components/RegisterInput/SelectInput";

const RegisterPage = () => {
  const [btnClicked, setBtnClicked] = useState(1); //0,1,2
  const router = useRouter();

  const [step, setStep] = useState(0); //0, 1, 2, 3, 4

  return (
    <div>
      <NaviBar currentPage={5} />
      <div className="w-full h-[100px] min-h-[100px]" />
      <div>
        {step === 0 && (
          <div className="flex flex-col w-full p-[30px] items-center bg-white">
            <div>
              <button
                className={
                  "w-[149.5px] h-[34px] text-center border-b-black" +
                  (btnClicked === 1
                    ? " border-b-[5px] font-bold"
                    : " border-b-[1px]")
                }
                type="button"
                onClick={() => {
                  setBtnClicked(1);
                }}
              >
                在學生
              </button>
              <button
                className={
                  "w-[149.5px] h-[34px] text-center border-b-black" +
                  (btnClicked === 2
                    ? " border-b-[5px] font-bold"
                    : " border-b-[1px]")
                }
                type="button"
                onClick={() => {
                  setBtnClicked(2);
                }}
              >
                已畢業學長姊
              </button>
            </div>
            {btnClicked === 1 ? (
              <></>
            ) : (
              <div className="flex flex-col items-center">
                <h1 className="text-[32px]/[35px] text-black font-semibold mt-[28px]">
                  建立職航帳號
                </h1>
                <p className="text-[16px]/[35px] text-black font-normal mb-[35px]">
                  向學弟妹分享職涯經驗，傳承向前進的資源和動力！
                </p>
                <label htmlFor="email">
                  <p className="text-[16px]/[30px] text-black font-bold mx-[3px] my-[10px]">
                    電子信箱（請輸入個人常用信箱）
                  </p>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="個人常用 Email"
                    className="w-[360px] h-[45px] p-[10px] rounded-[8px] bg-[#F1F1EE]"
                    required
                  />
                </label>
                <label htmlFor="password">
                  <p className="text-[16px]/[30px] text-black font-bold mx-[3px] my-[10px]">
                    設立密碼
                  </p>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="輸入密碼"
                    className="w-[360px] h-[45px] p-[10px] rounded-[8px] bg-[#F1F1EE]"
                    required
                  />
                </label>
                <RegisterProgress currentStep={0}></RegisterProgress>
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                  }}
                  className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-[60px]"
                >
                  下一步
                </button>
              </div>
            )}
          </div>
        )}
        {step === 1 && (
          <div className="w-full h-[465px] pt-[45px] pb-[81px] my-[30px] flex flex-col items-center bg-white">
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
                  setStep(0);
                }}
                className="w-[95px] h-[44px] py-[10px] gap-[10px] flex items-center text-base font-medium"
              >
                <img src="/arrow2.svg" className="w-[9.5px] h-[17px]" />
                上一步
              </button>
              <button
                type="button"
                onClick={() => {
                  setStep(2);
                }}
                className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-[60px]"
              >
                下一步
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="w-full h-[1280px] py-[60px] flex flex-col items-center bg-white">
            <h1 className="w-[532px] text-[32px]/[40px] font-semibold text-nowrap my-[10px] whitespace-pre-line">
              {
                "歡迎，感謝您願意引導學弟妹啟航！\n創建個人檔案，分享自己的職涯軌跡"
              }
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
                  setStep(1);
                }}
                className="w-[95px] h-[44px] py-[10px] gap-[10px] flex items-center text-base font-medium"
              >
                <img src="/arrow2.svg" className="w-[9.5px] h-[17px]" />
                上一步
              </button>
              <button
                type="button"
                onClick={() => {
                  setStep(3);
                }}
                className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-[60px]"
              >
                下一步
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="w-full h-[1540px] py-[60px] flex flex-col items-center bg-white">
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
                  setStep(2);
                }}
                className="w-[95px] h-[44px] py-[10px] gap-[10px] flex items-center text-base font-medium"
              >
                <img src="/arrow2.svg" className="w-[9.5px] h-[17px]" />
                上一步
              </button>
              <button
                type="button"
                onClick={() => {
                  setStep(4);
                }}
                className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-[60px]"
              >
                下一步
              </button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="w-full h-[922px] py-[52px] flex flex-col items-center bg-white">
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
                {
                  "我同意在接受學弟妹的聯絡邀請後，\n於個人頁面顯示聯絡信箱給對方"
                }
              </p>
            </label>

            <div className="w-[349px] h-[68px] py-[10px] mt-[100px] mb-[10px] flex justify-between">
              <button
                type="button"
                onClick={() => {
                  setStep(3);
                }}
                className="w-[95px] h-[44px] py-[10px] gap-[10px] flex items-center text-base font-medium"
              >
                <img src="/arrow2.svg" className="w-[9.5px] h-[17px]" />
                上一步
              </button>
              <button
                type="button"
                onClick={() => {
                  router.push("/");
                }}
                className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-[60px]"
              >
                完成註冊
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;
