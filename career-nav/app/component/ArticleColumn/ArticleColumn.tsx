import React from "react";
import Article from "../Article/Article";
import Link from "next/link";

const ArticleColumn = () => {
  let articleSet = {
    thumbnail: ["/article2.webp", "/article1.webp"],
    title: ["實現夢想職涯的 10 個要點", "大學期間可以做的 5 件事"],
    desciption: [
      "人資學姊分享 企業到底在面試時最想知道什麼",
      "為職涯奠基的關鍵行動",
    ],
    authorName: ["中心哲", "中新穎"],
    authorImg: ["/avatarImgTest/justin.jpg", "/avatarImgTest/avatar1.webp"],
  };

  return (
    <div className="flex flex-col w-full h-[610px] px-[10px] py-[30px] gap-[50px] items-center">
      <h1 className="w-full h-[50px] text-[40px]/[70px] font-bold text-center">
        精選訪談文章
      </h1>
      {articleSet.title.map((title, index) => (
        <Article
          key={index}
          thumbnail={articleSet.thumbnail[index]}
          title={title}
          description={articleSet.desciption[index]}
          authorName={articleSet.authorName[index]}
          authorImg={articleSet.authorImg[index]}
        />
      ))}

      <Link
        className="w-[240px] h-[48px] rounded-[20px] p-[12px] bg-black text-white text-center hover:bg-black/40"
        href="/careerProfile"
      >
        閱讀更多
      </Link>
    </div>
  );
};

export default ArticleColumn;
