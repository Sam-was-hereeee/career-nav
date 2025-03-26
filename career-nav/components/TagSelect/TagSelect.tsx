import React from "react";

interface Props {
  id: string;
  option: string[];
  opValue: string[];
  children: string; //defaultOption
}

const TagSelect = ({ id, option, opValue, children }: Props) => {
  return (
    <label className="flex relative h-[30px] items-center" htmlFor={id}>
      <select
        name={id}
        id={id}
        className="h-[30px] rounded-[10px] pl-[10px] pr-[40px] py-[3px] appearance-none"
        defaultValue={"default"}
      >
        <option value="default" disabled>
          {children}
        </option>
        {option.map((option, index) => (
          <option key={index} value={opValue[index]}>
            {option}
          </option>
        ))}
      </select>
      <img
        className="absolute w-6 h-6 right-[6px] pointer-events-none"
        src="/ExploreProfile/selectArrow.svg"
      />
    </label>
  );
};

export default TagSelect;
