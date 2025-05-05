"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

interface Props {
  children: string;
  id: string;
  description?: string;
  placeholder: string;
  required: boolean;
  type?: "text" | "number";
}

const TextInput = ({
                     children,
                     id,
                     description,
                     placeholder,
                     required,
                     type = "text",
                   }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = (errors as any)?.[id]?.message;

  return (
      <label
          htmlFor={id}
          className="flex flex-col mt-[10px] mb-[15px] text-nowrap"
      >
        <h5 className="flex text-base font-bold mx-[3px] my-[10px]">
          {children}
          {required && <span className="text-red-700 whitespace-pre">{" *"}</span>}
        </h5>
        {description && (
            <p className="text-[11px] font-normal mx-[3.9px] mb-[5px]">
              {description}
            </p>
        )}
        <input
            id={id}
            {...register(id, { required })}
            type={type}
            placeholder={placeholder}
            className={`w-full sm:w-full h-[45px] rounded-[8px] p-[10px] my-[5px] bg-[#F1F1EE] ${
                errorMessage ? "border border-red-500" : ""
            }`}
        />
        {errorMessage && (
            <p className="text-sm text-red-500 mt-[3px] mx-[5px]">{errorMessage}</p>
        )}
      </label>
  );
};

export default TextInput;
