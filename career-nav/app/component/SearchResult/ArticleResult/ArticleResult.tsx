import React from "react";
import Article from "../../Article/Article";

const ArticleResult = () => {
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
    <div className="flex flex-col w-full px-[40px] py-[30px] gap-[10px] items-center">
      <div className="flex flex-col w-full h-[82px] gap-[10px] text-center">
        <h1 className="text-[40px]/[48px] font-bold">資訊軟體產業 訪談文章</h1>
        <p className="text-base font-normal">共有 5 篇文章</p>
      </div>
      <div className="flex flex-col w-798 py-[20px] gap-[40px]">
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
      </div>
    </div>
  );
};

export default ArticleResult;
