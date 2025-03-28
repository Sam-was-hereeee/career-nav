import React from "react";

interface Props {
  children: string;
  id: string;
  description?: string;
  placeholder: string;
  optionArr: string[];
  valueArr: string[];
  required: boolean; //0, 1
}

const SelectInput = ({
  children,
  id,
  description,
  placeholder,
  optionArr,
  valueArr,
  required,
}: Props) => {
  return (
    <label
      htmlFor={id}
      className="flex flex-col relative mt-[10px] mb-[15px] text-nowrap"
    >
      <h5 className="flex text-base font-bold mx-[3px] my-[10px]">
        {children}
        {required && <p className="text-red-700 whitespace-pre">{" *"}</p>}
      </h5>
      {description && (
        <p className="text-[11px] font-normal mx-[3.9px] mb-[5px]">
          {description}
        </p>
      )}
      <select
        id={id}
        name={id}
        required={required}
        className="w-[405px] h-[45px] rounded-[8px] p-[10px] my-[5px] bg-[#F1F1EE] appearance-none"
        defaultValue={"default"}
      >
        <option value="default" className="text-[#5F6368]" disabled>
          {placeholder}
        </option>
        {optionArr.map((option, index) => (
          <option key={index} value={valueArr[index]}>
            {option}
          </option>
        ))}
      </select>
      <img
        className={
          "absolute w-6 h-6 right-[13px] pointer-events-none" +
          (description ? " top-[81px]" : " top-[59.5px]")
        }
        src="/ExploreProfile/selectArrow.svg"
      />
    </label>
  );
};

export default SelectInput;
