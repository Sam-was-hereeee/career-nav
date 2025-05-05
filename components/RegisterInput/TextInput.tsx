import React from "react";

interface Props {
  children: string;
  id: string;
  description?: string;
  placeholder: string;
  required: boolean; //0, 1
  type?: "text" | "number"
}

const TextInput = ({
  children,
  id,
  description,
  placeholder,
  required, type="text"
}: Props) => {
  return (
    <label
      htmlFor={id}
      className="flex flex-col mt-[10px] mb-[15px] text-nowrap"
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
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-[80vw] sm:w-[405px] h-[45px] rounded-[8px] p-[10px] my-[5px] bg-[#F1F1EE]"
        required={required}
      />
    </label>
  );
};

export default TextInput;
