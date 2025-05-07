"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {signOut} from "@lib/auth/actions";
import {useUser} from "@/hook/use-user"; // or however you create your client

interface Props {
    currentPage: number;
    loggedIn: boolean;
}

const AccountBtn = ({ currentPage, loggedIn }: Props) => {
    const router = useRouter();
    const {refetchUser} = useUser();

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
                className="w-[40px] h-[40px] rounded-full ml-4"
                onClick={() => {
                    router.push(loggedIn ? "/register/finish" : "/login");
                }}
            >
                <img className="w-full h-full cursor-pointer" src="/NaviBar/avatar.svg" alt="avatar" />
            </div>
        </div>
    );
};

export default AccountBtn;
