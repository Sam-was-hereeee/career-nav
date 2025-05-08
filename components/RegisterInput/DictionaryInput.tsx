"use client";

import React from "react";
import {useFormContext, useFieldArray} from "react-hook-form";

interface Props {
    id: string;
    description?: string;
    children?: string;
}

interface DictionaryError {
    key?: { message?: string };
    value?: { message?: string };
}

const DictionaryInput = ({ id, description, children }: Props) => {
    const {
        control,
        register,
        formState: { errors },
    } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: id,
    });

    const errorMessages = errors?.[id] as DictionaryError[] | undefined;

    return (
        <div className="flex flex-col mt-[10px] mb-[15px] w-full text-nowrap">
            <h5 className="flex text-base font-bold mx-[3px] my-[10px]">
                {children}
            </h5>
            {description && (
                <p className="text-[11px] font-normal mx-[3.9px] mb-[5px]">
                    {description}
                </p>
            )}

            <div className="flex flex-col gap-2">
                {fields.map((field, index) => (
                    <div key={field.id} className="flex gap-2 items-center w-full">
                        <input
                            {...register(`${id}.${index}.key`, { required: true })}
                            placeholder="IG..."
                            className={`w-1/2 h-[45px] rounded-[8px] p-[10px] bg-[#F1F1EE] ${
                                errorMessages?.[index]?.key ? "border border-red-500" : ""
                            }`}
                        />
                        <input
                            {...register(`${id}.${index}.value`, { required: true })}
                            placeholder="https://..."
                            className={`w-1/2 h-[45px] rounded-[8px] p-[10px] bg-[#F1F1EE] ${
                                errorMessages?.[index]?.value ? "border border-red-500" : ""
                            }`}
                        />
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="text-red-500 text-sm ml-2 hover:underline"
                        >
                            移除
                        </button>
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={() => append({ key: "", value: "" })}
                className="mt-3 w-[160px] h-[36px] rounded-[10px] bg-[#E4E2DD] hover:bg-[#E4E2DD]/70 text-sm text-black font-medium transition-all duration-300 ease-in"
            >
                新增欄位
            </button>
        </div>
    );
};

export default DictionaryInput;
