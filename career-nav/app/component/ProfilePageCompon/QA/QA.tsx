import React from "react";

const QA = () => {
  let test: number[] = [0, 1, 2];
  return (
    <div className="flex flex-col items-center w-full h-[439px] rounded-[8px] p-[12px] gap-[20px]">
      <h2 className="text-[32px]/[24px] font-bold text-center">經驗分享QA</h2>
      {test.map((test, index) => (
        <div className="w-[972px] h-[96px] bg-[#D9D9D9]" key={test}></div>
      ))}
    </div>
  );
};

export default QA;
