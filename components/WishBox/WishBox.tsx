import React from "react";
import WishInput from "./WishInput";

const WishBox = () => {
    return (
        <div className="flex flex-col sm:flex-row w-full py-10 sm:py-[60px] px-4 sm:px-[170px] bg-[#E4E2DD] items-center gap-6 sm:gap-12">

            {/* Text block */}
            <div className="flex flex-col text-center sm:text-left w-full sm:w-1/2 space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight">
                    沒看到自己感興趣的
                    <br />
                    職位或產業？
                </h1>
                <p className="text-sm sm:text-base font-normal">
                    告訴我們你的職業目標，我們會盡力尋找可以給你指引的學長姐。
                </p>
            </div>

            {/* Input area */}
            <div className="w-auto sm:w-1/2">
                <WishInput />
            </div>
        </div>
    );
};

export default WishBox;
