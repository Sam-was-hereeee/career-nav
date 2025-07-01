"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "@lib/auth/actions";
import { useUser } from "@/hook/use-user"; // or however you create your client

interface Props {
  currentPage: number;
  loggedIn: boolean;
}

const AccountBtn = ({ currentPage, loggedIn }: Props) => {
  const router = useRouter();
  const { refetchUser } = useUser();

  const handleLogout = async () => {
    await signOut();
    refetchUser();
    router.refresh(); // refresh to update session state
    router.push("/login");
  };

  return (
    <div className="flex items-center ml-[40px]">
      {loggedIn ? (
        <button
          onClick={handleLogout}
          className={
            "text-base font-bold text-nowrap hover:text-black transition-all duration-200 ease-in" +
            (currentPage === 5 ? " text-black" : " text-[#979797]")
          }
        >
          登出
        </button>
      ) : (
        <Link
          className={
            "text-base font-bold text-nowrap hover:text-black transition-all duration-200 ease-in" +
            (currentPage === 5 ? " text-black" : " text-[#979797]")
          }
          href="/login"
        >
          登入/註冊
        </Link>
      )}

      <div
        className="w-10 h-10 rounded-full ml-4 cursor-pointer relative"
        onClick={() => {
          router.push(loggedIn ? "/profile" : "/login");
        }}
      >
        <Image
          src="/NaviBar/avatar.svg"
          alt="avatar"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default AccountBtn;
