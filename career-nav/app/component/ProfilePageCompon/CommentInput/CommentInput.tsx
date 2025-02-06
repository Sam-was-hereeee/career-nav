import React from "react";
import InputBox from "./InputBox";

const CommentInput = () => {
  return (
    <div className="flex flex-col items-center w-full h-[300px] px-[170px] py-[60px] gap-[44px] text-nowrap">
      <div className="flex flex-col items-center gap-[12px]">
        <h2 className="text-[40px]/[50px] font-bold">
          留言以和其他同儕交流、得到學長姐解答
        </h2>
        <p>參與討論、分享心情，讓自己離職涯目標越來越近！</p>
      </div>
      <InputBox />
    </div>
  );
};

export default CommentInput;
