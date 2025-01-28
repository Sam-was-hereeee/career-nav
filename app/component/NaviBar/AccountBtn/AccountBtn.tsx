"use client";

import React from "react";

const AccountBtn = () => {
  return (
    <div
      className="w-[40px] h-[40px] rounded-full ml-4 mr-6"
      onClick={() => {
        console.log("account");
      }}
    >
      <img className="w-full h-full" src="/NaviBar/avatar.svg" />
    </div>
  );
};

export default AccountBtn;
