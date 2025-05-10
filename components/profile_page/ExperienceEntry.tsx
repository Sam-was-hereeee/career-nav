import React from "react";
import Image from "next/image";

interface Props {
  imgSrc?: string;
  experience?: string;
  occupation?: string;
  period?: string;
}

const ExperienceEntry = ({ imgSrc, experience, occupation, period }: Props) => {
  return (
    <div className="flex items-center w-full h-28 md:h-32 pl-5 md:pl-7 gap-4 md:gap-6 border-b border-[#D7D8D9]">
      <div className="relative w-16 h-16 rounded-md overflow-hidden">
        <Image
          src={imgSrc ?? "/gray_bg.jpg"}
          alt="image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 md:gap-1.5">
        <h5 className="text-base font-bold">{experience ?? "經驗名稱"}</h5>
        <h6 className="text-xs">{occupation ?? "職位"}</h6>
        <p className="text-xs">{period ?? "時間"}</p>
      </div>
    </div>
  );
};

export default ExperienceEntry;
