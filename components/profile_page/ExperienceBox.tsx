import React from "react";

interface Props {
  type: string;
  children?: React.ReactNode;
}

const ExperienceBox = ({ type, children }: Props) => {
  return (
    <div className="relative w-5/6 lg:w-3/4 h-auto pt-8 md:pt-10 border border-[#D7D8D9] rounded-md overflow-hidden">
      <div className="flex justify-center items-center absolute w-full h-8 md:h-10 top-0 bg-[#D7D8D9]">
        <h3 className="text-base">{type}</h3>
      </div>
      {children}
    </div>
  );
};

export default ExperienceBox;
