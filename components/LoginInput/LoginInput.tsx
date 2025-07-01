import Link from "next/link";
import Image from "next/image";
import InputBox from "./InputBox";

const LoginInput = () => {
  return (
    <div className="flex flex-col sm:flex-row-reverse w-full px-[70px] py-[52px] gap-4 justify-center items-center">
      <div className="max-sm:hidden visible order-2 sm:order-1 w-96 h-96 min-w-60 min-h-60 mt-3 relative">
        <Image
          src="loginBg.svg"
          alt="login background"
          className="object-contain"
          fill
        ></Image>
      </div>
      <div className="flex flex-col sm:flex-col min-w-[521px] min-h-[482px] rounded-[20px] px-[10px] py-[40px] gap-[10px] items-center">
        <h1 className="text-[24px]/[35px] font-semibold text-center whitespace-pre">
          登入職屬
          <br />
          享受專為文學院學生設計的服務
        </h1>
        <p className="text-[16px]/[30px] text-[#5F6368] text-center">
          還沒有帳號？
          <Link className="font-bold" href="/register">
            立即註冊
          </Link>
        </p>
        <div className="visible sm:hidden w-60 h-60 mt-3 relative">
          <Image
            src="/loginBg.svg"
            alt="login background"
            className="object-contain"
            fill
          ></Image>
        </div>
        <InputBox />
      </div>
    </div>
  );
};

export default LoginInput;
