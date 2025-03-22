import React from "react";
import { useRouter } from "next/navigation";
import RegisterProgress from "./RegisterProgress";

const SeniorInput = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // 防止頁面重新載入

    router.push("/register/seniorRegister");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
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
        type="submit"
        className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-[60px]"
      >
        下一步
      </button>
    </form>
  );
};

export default SeniorInput;
