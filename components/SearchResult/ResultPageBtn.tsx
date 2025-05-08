"use client";

// import React, { useState } from "react";

const ResultPageBtn = () => {
    const pageCnt: number = 4;
    const pageBtn: number[] = [];
    // const [currentPage, setCurrentPage] = useState(1);

    for (let i = 0; i < pageCnt; i++) {
        pageBtn.push(i);
    }
    return (<></>
        // <div className="flex w-full h-[36px] py-[6px] gap-[10px] justify-center items-center">
        //     <button
        //         className="flex w-[24px] h-[24px] items-center justify-center"
        //         onClick={() => {
        //             if (currentPage > 1) {
        //                 setCurrentPage(currentPage - 1);
        //             }
        //         }}
        //     >
        //         <img
        //             className="w-[8.75px] h-[10px]"
        //             src="/arrow.svg"
        //             alt="arrow"
        //         />
        //     </button>
        //     <div className="flex h-[17px]">
        //         {pageBtn.map((pageIndex) => (
        //             <button
        //                 className={
        //                     "flex w-[22px] h-[17px] text-base text-center items-center justify-center" +
        //                     (currentPage === pageIndex + 1
        //                         ? " font-bold"
        //                         : " font-normal")
        //                 }
        //                 key={pageIndex}
        //                 onClick={() => {
        //                     setCurrentPage(pageIndex + 1);
        //                 }}
        //             >
        //                 {pageIndex + 1}
        //             </button>
        //         ))}
        //     </div>
        //     <button
        //         className="flex w-[24px] h-[24px] items-center justify-center"
        //         onClick={() => {
        //             if (currentPage < pageCnt) {
        //                 setCurrentPage(currentPage + 1);
        //             }
        //         }}
        //     >
        //         <img
        //             className="w-[8.75px] h-[10px] rotate-180"
        //             src="/arrow.svg"
        //             alt="arrow"
        //         />
        //     </button>
        // </div>
     );
};

export default ResultPageBtn;
