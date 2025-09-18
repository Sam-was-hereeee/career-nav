import React, { isValidElement } from "react";
import ExperienceEntry from "./ExperienceEntry";

interface Props {
  isEditable: boolean;
  type: string;
  children?:
    | React.ReactElement<Props, typeof Child>
    | React.ReactElement<Props, typeof Child>[];
}

const ExperienceBox = ({ isEditable, type, children }: Props) => {
  const childWithProps = isValidElement(children)
    ? React.cloneElement(children, { isEditable: isEditable })
    : null;

  return (
    <div className="relative w-5/6 lg:w-3/4 h-auto pt-8 md:pt-10 border border-[#D7D8D9] rounded-md overflow-hidden">
      <div className="flex justify-center items-center absolute w-full h-8 md:h-10 top-0 bg-[#B2BEC180]">
        <h3 className="text-base">{type}</h3>
      </div>
      {isEditable && <></>}
      {childWithProps}
    </div>
  );
};

export default ExperienceBox;
