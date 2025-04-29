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
      <div className="flex w-full max-w-[800px] flex-col sm:flex-row rounded-[20px] border border-black/10 p-4 gap-4 shadow-lg">

        {/* Thumbnail */}
        <div className="w-full sm:w-[100px] h-[180px] sm:h-[100px] rounded-[10px] bg-[#D9D9D9]/50 overflow-hidden">
          <img
              id="thumbnail"
              className="w-full h-full object-cover rounded-[10px]"
              src={thumbnail}
              alt="thumbnail"
          />
        </div>

        {/* Text and Author */}
        <div className="flex flex-col flex-1 justify-between gap-2">

          {/* Title and Description */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-semibold leading-snug">
              {title}
            </h3>
            <p className="text-sm sm:text-base font-normal leading-relaxed break-words">
              {description}
            </p>
          </div>

          {/* Author */}
          <div id="author" className="flex items-center gap-3 mt-2">
            <div id="avatar" className="w-6 h-6 rounded-full overflow-hidden bg-black/10">
              <img
                  className="w-full h-full object-cover rounded-full"
                  src={authorImg}
                  alt="avatar"
              />
            </div>
            <p id="authorName" className="text-sm font-medium">
              {authorName}
            </p>
          </div>

        </div>

      </div>
  );
};

export default Article;
