"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

interface Props {
    children: string;
    id: string;
    description?: string;
    placeholder: string;
    optionArr: string[];
    valueArr: string[];
    required: boolean;
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
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const errorMessage = errors?.[id]?.message;

    return (
        <label
            htmlFor={id}
            className="flex flex-col relative mt-[10px] mb-[15px] text-nowrap"
        >
            <h5 className="flex text-base font-bold mx-[3px] my-[10px]">
                {children}
                {required && (
                    <span className="text-red-700 whitespace-pre">{" *"}</span>
                )}
            </h5>
            {description && (
                <p className="text-[11px] font-normal mx-[3.9px] mb-[5px]">
                    {description}
                </p>
            )}
            <select
                id={id}
                {...register(id, { required })}
                className={`w-full sm:w-full h-[45px] rounded-[8px] p-[10px] my-[5px] bg-[#F1F1EE] appearance-none ${
                    errorMessage ? "border border-red-500" : ""
                }`}
                defaultValue=""
            >
                <option value="" disabled>
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
            {errorMessage && (
                <p className="text-sm text-red-500 mt-[3px] mx-[5px]">
                    {errorMessage}
                </p>
            )}
        </label>
    );
};

export default SelectInput;
