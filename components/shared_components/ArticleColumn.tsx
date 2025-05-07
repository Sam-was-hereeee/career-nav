import React from "react";
import Article from "./Article";
import Link from "next/link";

const ArticleColumn = () => {
    const articleSet = {
        thumbnail: ["/gray_bg.jpg", "/gray_bg.jpg"],
        title: [
            "【台大歷史×遊戲企劃】Rebecca Lee 專訪",
            "【台大外文×數位廣告管理師】薛令婕 專訪"
        ],
        desciption: [
            "文學院培養的軟實力，幫助我快速跳轉領域",
            "行銷和外文的核心能力，其實異曲同工"
        ],
        authorName: ["職業訪談", "職業訪談"],  //
        authorImg: ["/gray_bg.jpg", "/gray_bg.jpg"], //
        link: ["https://medium.com/@ntu.career.nav/%E5%8F%B0%E5%A4%A7%E6%AD%B7%E5%8F%B2-%E9%81%8A%E6%88%B2%E4%BC%81%E5%8A%83-%E6%96%87%E5%AD%B8%E9%99%A2%E5%9F%B9%E9%A4%8A%E7%9A%84%E8%BB%9F%E5%AF%A6%E5%8A%9B-%E5%B9%AB%E5%8A%A9%E6%88%91%E5%BF%AB%E9%80%9F%E8%B7%B3%E8%BD%89%E9%A0%98%E5%9F%9F-rebecca-lee%E5%B0%88%E8%A8%AA-e8728be736f4", "https://medium.com/@ntu.career.nav/%E5%8F%B0%E5%A4%A7%E5%A4%96%E6%96%87-%E6%95%B8%E4%BD%8D%E5%BB%A3%E5%91%8A%E7%AE%A1%E7%90%86%E5%B8%AB-%E8%A1%8C%E9%8A%B7%E5%92%8C%E5%A4%96%E6%96%87%E7%9A%84%E6%A0%B8%E5%BF%83%E8%83%BD%E5%8A%9B-%E5%85%B6%E5%AF%A6%E7%95%B0%E6%9B%B2%E5%90%8C%E5%B7%A5-%E8%96%9B%E4%BB%A4%E5%A9%95%E5%AD%B8%E5%A7%8A%E5%B0%88%E8%A8%AA-d1b1069c0f7e"]
    };

  return (
    <div className="flex flex-col w-full px-[10px] py-[30px] gap-[50px] items-center">
      <h1 className="w-full h-[50px] text-[40px]/[70px] font-bold text-center">
        精選訪談文章
      </h1>
      {articleSet.title.map((title, index) => (
          <Link href={articleSet.link[index]} key={index}>
        <Article
          key={index}
          thumbnail={articleSet.thumbnail[index]}
          title={title}
          description={articleSet.desciption[index]}
          authorName={articleSet.authorName[index]}
          authorImg={articleSet.authorImg[index]}
        />
          </Link>
      ))}

      <Link
        className="w-[240px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white text-center hover:bg-[#728594]/80 shadow-xl transition-all duration-300 ease-in"
        href="./login"
      >
        精彩文章即將上線～
      </Link>
    </div>
  );
};

export default ArticleColumn;
