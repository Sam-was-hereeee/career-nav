"use client";

import React, {useEffect} from "react";
import NaviBar from "@/components/shared_components/NaviBar/NaviBar";
import Footer from "@/components/shared_components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RegisterProgress from "@/components/RegisterInput/RegisterProgress";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {getUserInfo, signUpWithEmailAndPassword} from "@lib/auth/actions";

// Form Schema
const registerSchema = z.object({
    isSenior: z.boolean(),
    email: z.string().email("請輸入有效的電子信箱"),
    password: z.string().min(6, "密碼至少需要6個字元"),
});

type RegisterFormData = z.infer<typeof registerSchema>;

// Types for props
interface RegisterTypeSelectorProps {
    isSenior: boolean;
    setIsSenior: (value: boolean) => void;
    handleGoogleSignup: () => void;
}

interface StepProps {
    setStep: (step: number) => void;
}

// Button group for student/alumni toggle and Google signup
const RegisterTypeSelector = ({
    isSenior,
    setIsSenior,
    handleGoogleSignup,
}: RegisterTypeSelectorProps) => {
    const { setValue } = useFormContext<RegisterFormData>();

    const handleTypeChange = (value: boolean) => {
        setIsSenior(value);
        setValue("isSenior", value);
    };

    return (
        <div className="flex flex-col items-center">
            <div>
                <button
                    className={
                        "w-[149.5px] h-[34px] text-center border-b-black" +
                        (!isSenior
                            ? " border-b-[5px] font-bold"
                            : " border-b-[1px]")
                    }
                    type="button"
                    onClick={() => handleTypeChange(false)}
                >
                    在學生
                </button>
                <button
                    className={
                        "w-[149.5px] h-[34px] text-center border-b-black" +
                        (isSenior
                            ? " border-b-[5px] font-bold"
                            : " border-b-[1px]")
                    }
                    type="button"
                    onClick={() => handleTypeChange(true)}
                >
                    已畢業學長姊
                </button>
            </div>
            {!isSenior && (
                <button
                    type="button"
                    onClick={handleGoogleSignup}
                    className="w-[360px] h-[45px] mt-[32px] mb-[12px] flex items-center justify-center gap-2 rounded-[8px] border border-[#D7D8D9] bg-white shadow hover:bg-[#f5f5f5]"
                >
                    <img
                        src="/google-icon.svg"
                        alt="Google"
                        className="w-6 h-6"
                    />
                    <span className="text-[16px] font-medium text-[#444]">
                        使用 Google 註冊
                    </span>
                </button>
            )}
        </div>
    );
};

// Step 0: Choose type and alumni registration form
const Step0 = ({ setStep }: StepProps) => {
    const {
        register,
        watch,
        setValue,
        trigger,
        formState: { errors },
    } = useFormContext<RegisterFormData>();
    const isSenior = watch("isSenior");

    const handleNext = async () => {
        if (isSenior) {
            const isValid = await trigger(["email", "password"]);
            if (!isValid) {
                return;
            }
            const [email, password] = watch(["email", "password"])
            const {error} = await signUpWithEmailAndPassword(email, password, isSenior);
            if (error) {
                window.alert("註冊失敗，請稍後再試或聯絡我們")
                console.log(error)
                return;
            }
        } else {

        }
        setStep(1);
    };

    return (
        <div className="flex flex-col w-full p-[30px] items-center bg-white">
            <RegisterTypeSelector
                isSenior={isSenior}
                setIsSenior={(value) => setValue("isSenior", value)}
                handleGoogleSignup={() => {}}
            />
            {isSenior && (
                <div className="flex flex-col items-center">
                    <h1 className="text-[32px]/[35px] text-black font-semibold mt-[28px]">
                        建立職屬帳號
                    </h1>
                    <p className="text-[16px]/[35px] text-black font-normal mb-[35px]">
                        向學弟妹分享職涯經驗，傳承向前進的資源和動力！
                    </p>
                    <label htmlFor="email">
                        <p className="text-[16px]/[30px] text-black font-bold mx-[3px] my-[10px]">
                            電子信箱（請輸入個人常用信箱）
                        </p>
                        <input
                            {...register("email", { required: "請輸入電子信箱" })}
                            id="email"
                            type="email"
                            placeholder="個人常用 Email"
                            className="w-[360px] h-[45px] p-[10px] rounded-[8px] bg-[#F1F1EE]"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </label>
                    <label htmlFor="password">
                        <p className="text-[16px]/[30px] text-black font-bold mx-[3px] my-[10px]">
                            設立密碼
                        </p>
                        <input
                            {...register("password", { required: "請輸入密碼" })}
                            id="password"
                            type="password"
                            placeholder="輸入密碼"
                            className="w-[360px] h-[45px] p-[10px] rounded-[8px] bg-[#F1F1EE]"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </label>
                    <RegisterProgress currentStep={0} />
                    <button
                        type="button"
                        onClick={handleNext}
                        className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-[60px]"
                    >
                        下一步
                    </button>
                </div>
            )}
        </div>
    );
};

// Step 1: Email verification waiting page
const Step1 = ({ setStep }: StepProps) => {
    return (
        <div className="w-full px-16 gap-5 h-[465px] pt-[45px] pb-[81px] my-[30px] flex flex-col items-center bg-white">
            <h1 className="sm:text-[24px]/[35px] text-wrap text-3xl sm:text-nowrap text-center font-semibold my-[10px]">
                驗證電子郵件已寄出<br/>請前往您的電子郵件進行驗證
            </h1>
            <p className="text-[14px]/[35px] font-normal text-[#5F6368]">
                沒有收到驗證連結？
                <button type="button" className="underline">
                    重新寄送
                </button>
            </p>
            <RegisterProgress currentStep={1} />
            <div className="w-[349px] h-[68px] py-[10px] mb-[10px] flex justify-between">
                <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="w-[95px] h-[44px] py-[10px] gap-[10px] flex items-center text-base font-medium"
                >
                    <img src="/arrow2.svg" className="w-[9.5px] h-[17px]" />
                    上一步
                </button>
            </div>
        </div>
    );
};

const RegisterPage = () => {
    const router = useRouter();
    const [step, setStep] = useState(0);

    const methods = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            isSenior: true,
        },
        mode: "onChange",
    });

    const onSubmit = async (data: RegisterFormData) => {
        try {
            // TODO: Submit to your API
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(()=>{
        const checkUser = async ()=> {
            const {data} = await getUserInfo()
            if (data) {
                if (!data.has_profile)
                    router.push("/register/filldata");
                else
                    router.push("/");
            }
        }
        checkUser()
    },[])

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <NaviBar currentPage={5} />
                <div className="w-full h-[100px] min-h-[100px]" />
                <div>
                    {step === 0 && <Step0 setStep={setStep} />}
                    {step === 1 && <Step1 setStep={setStep} />}
                </div>
                <Footer />
            </form>
        </FormProvider>
    );
};

export default RegisterPage;
