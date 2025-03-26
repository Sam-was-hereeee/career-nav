import React from "react";

interface Props {
  thumbnail: string;
  title: string;
  description: string;
  authorName: string;
  authorImg: string;
}

const Article = ({
  thumbnail,
  title,
  description,
  authorName,
  authorImg,
}: Props) => {
  return (
    <div className="flex w-[798px] h-[140px] rounded-[20px] border-[1px] border-black/10 p-[16px] gap-[16px]">
      <div className="w-[100px] h-[100px] rounded-[10px] bg-[#D9D9D9]/50">
        <img
          id="thumbnail"
          className="w-full h-full rounded-[10px] object-cover"
          src={thumbnail}
          alt="thumbnail"
        />
      </div>
      <div className="flex flex-col w-[650px] h-[108px] gap-[8px]">
        <h3 className="text-[20px]/[28px] font-semibold">{title}</h3>
        <p className="text-base font-normal">{description}</p>
        <div
          id="author"
          className="flex w-[373px] h-[40px] p-[10px] gap-[10px]"
        >
          <div
            id="avatar"
            className="w-[20px] h-[20px] rounded-[20px] bg-black/10"
          >
            <img
              className="w-full h-full rounded-[20px] object-cover"
              src={authorImg}
              alt="avatar"
            />
          </div>
          <p
            id="authorName"
            className="w-[299px] h-[20px] text-[14px]/[20px] font-medium"
          >
            {authorName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
