"use client";

import Link from "next/link";
import React, { useState } from "react";
import { signInWithEmail } from "@lib/auth/actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useUser } from "@/hook/use-user";

const InputBox = () => {
  {
    /*const [btnClicked, setBtnClicked] = useState(1); // 0,1,2*/
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  const { refetchUser, user } = useUser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await signInWithEmail(email, password);

    if (error) {
      setErrorMsg(error);
    } else {
      refetchUser();
      toast.success("登入成功～歡迎回來");
      if (!user?.has_profile) router.push("/register/filldata");
      else router.push("/");
    }
  };

  return (
    <div className="flex flex-col w-[390px] h-[auto] p-[10px] gap-[10px] items-center">
      <form
        className="flex flex-col w-[390px] p-[10px] gap-[10px] items-center"
        onSubmit={handleSubmit}
      >
        {/* 
          <div className="flex w-[370px] h-[44px] p-[10px] justify-center">
            <button
                className={
                    "w-[149.5px] h-[34px] text-center border-b-black" +
                    (btnClicked === 1
                        ? " border-b-[5px] font-bold"
                        : " border-b-[1px]")
                }
                type="button"
                onClick={() => setBtnClicked(1)}
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
                onClick={() => setBtnClicked(2)}
            >
              已畢業學長姊
            </button>
          </div>*/}

        <div className="flex flex-col items-center w-[284px] p-[10px] gap-[10px]">
          <input
            className="min-w-[256px] h-[30px] rounded-[10px] p-[10px] bg-[#D9D9D9]/50"
            type="email"
            placeholder="輸入電子郵件"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="min-w-[256px] h-[30px] rounded-[10px] p-[10px] bg-[#D9D9D9]/50"
            type="password"
            placeholder="輸入密碼"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link href="/">忘記密碼？</Link>
        </div>

        {errorMsg && (
          <p className="text-red-500 text-sm text-center">{errorMsg}</p>
        )}

        <button
          className="w-[116px] h-[48px] rounded-[20px] p-[12px] text-white bg-black hover:bg-black/40 transition-all ease-in duration-300"
          type="submit"
        >
          登入
        </button>
      </form>
    </div>
  );
};

export default InputBox;
