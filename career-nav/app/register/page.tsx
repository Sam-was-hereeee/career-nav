"use client";

import React from "react";
import NaviBar from "../component/NaviBar/NaviBar";
import Footer from "../component/Footer/Footer";
import { useState } from "react";
import SeniorInput from "../component/RegisterInput/SeniorInput";

const registerPage = () => {
  const [btnClicked, setBtnClicked] = useState(1); //0,1,2
  return (
    <div>
      <NaviBar currentPage={5} />
      <div className="w-full h-[100px] min-h-[100px]" />
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
        {btnClicked === 1 ? <></> : <SeniorInput></SeniorInput>}
      </div>
      <Footer />
    </div>
  );
};

export default registerPage;
