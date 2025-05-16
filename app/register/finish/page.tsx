"use client";
import React from "react";
import { useRouter } from "next/navigation";
const AboutPage = () => {
    const router = useRouter();
    return (
        <div>
            <div
                className={
                    "w-4/5 px-10 mx-auto flex flex-col items-center justify-center mt-8"
                }
            >
                <h1 className="text-wrap inline sm:hidden text-2xl sm:text-3xl sm:text-nowrap font-semibold mt-[15px] whitespace-pre">
                    {"歡迎加入，職屬正式上線後將於第一時間通知您！"}
                </h1>
                <div
                    className={
                        "w-full flex-col flex sm:flex-row items-center justify-center my-8"
                    }
                >
                    <img
                        src={"/happy.svg"}
                        alt={"thank you"}
                        className={"py-4 mx-auto contain-content w-60"}
                    ></img>

                    <div className="flex-col space-y-8">
                        <h1 className="text-wrap hidden sm:inline text-2xl sm:text-3xl sm:text-nowrap font-semibold mt-[15px] whitespace-pre">
                            {"歡迎加入，職屬正式上線後將於第一時間通知您！"}
                        </h1>
                        <p className="whitespace-pre-wrap text-center text-xl/10 sm:text-left">
                            {"👥 現在就加入 LINE Open Chat 社群【職屬｜文學院職涯經驗交流】，\n" +
                                "獲得文學院專屬職缺資訊，\n" +
                                "也可以和在職學長姐、同儕一起討論職涯方向、就職經驗！"}
                        </p>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={() => {
                        location.href =
                            "https://line.me/ti/g2/rAlwtXhkZQXfTC3SYwb_9_Kx_1uN4w_4jUbNYg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default";
                    }}
                    className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-6"
                >
                    加入 LINE 社群
                </button>
                <button
                    type="button"
                    onClick={() => {
                        router.push("/");
                    }}
                    className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#979797] text-white font-medium mb-6"
                >
                    回到首頁
                </button>
            </div>
        </div>
    );
};

export default AboutPage;
