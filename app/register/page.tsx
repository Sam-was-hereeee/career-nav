"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import RegisterProgress from "@/components/RegisterInput/RegisterProgress";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authEmailResend, signUpWithEmailAndPassword } from "@lib/auth/actions";
import { useUser } from "@/hook/use-user";
import toast from "react-hot-toast";
import { joinWaitlist } from "@lib/waitlist/actions";

// Form Schema
const registerSchema = z.object({
    isSenior: z.boolean(),
    email: z.string().email("請輸入有效的電子信箱"),
    password: z.string().min(6, "密碼至少需要6個字元"),
    name: z.string().optional(),
    shoutout: z.string().optional(),
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
}: // handleGoogleSignup,
RegisterTypeSelectorProps) => {
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
    const searchParam = useSearchParams();
    useEffect(() => {
        setValue("isSenior", searchParam.get("is-senior") == "true");
    }, [searchParam, setValue]);
    const isSenior = watch("isSenior");
    const router = useRouter();

    const handleNext = async () => {
        if (isSenior) {
            const isValid = await trigger(["email", "password"]);
            if (!isValid) {
                return;
            }
            const [email, password] = watch(["email", "password"]);
            const { error } = await signUpWithEmailAndPassword(
                email,
                password,
                isSenior,
            );
            if (error) {
                window.alert("註冊失敗，請稍後再試或聯絡我們");
                console.log(error);
                return;
            }
            setStep(1);
        } else {
            const isValid = await trigger(["email"]);
            if (!isValid) return;
            const [email, name, shoutout] = watch([
                "email",
                "name",
                "shoutout",
            ]);
            const { error } = await joinWaitlist(email, name, shoutout);
            if (error) {
                toast.error("不好意思，出現錯誤，歡迎聯繫我們處理");
                return;
            }
            toast.success(
                "歡迎成為職屬的一員，我們會在完全上線的第一時間通知你～也歡迎到社群媒體追蹤我們",
            );
            router.push("/finish");
        }
    };

    return (
        <div className="flex flex-col w-full p-[30px] items-center bg-white">
            <RegisterTypeSelector
                isSenior={isSenior}
                setIsSenior={(value) => setValue("isSenior", value)}
                handleGoogleSignup={() => {}}
            />
            {
                <div className="flex flex-col items-center">
                    <h1 className="text-[32px]/[35px] text-black font-semibold mt-[28px]">
                        {isSenior ? "建立職屬帳號" : "加入文學院人脈網！"}
                    </h1>
                    <p className="text-[16px]/[35px] text-black font-normal mb-[35px]">
                        {isSenior
                            ? "向學弟妹分享職涯經驗，傳承向前進的資源和動力！"
                            : "您即將可以尋找適合您的職屬學長姐，諮詢職涯建議。我們將於服務上線第一時間通知您！"}
                    </p>
                    <label htmlFor="email">
                        <p className="text-[16px]/[30px] text-black font-bold mx-[3px] my-[10px]">
                            電子信箱（請輸入個人常用信箱）
                        </p>
                        <input
                            {...register("email", {
                                required: "請輸入電子信箱",
                            })}
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
                    {isSenior ? (
                        <label htmlFor="password">
                            <p className="text-[16px]/[30px] text-black font-bold mx-[3px] my-[10px]">
                                設立密碼
                            </p>
                            <input
                                {...register("password", {
                                    required: "請輸入密碼",
                                })}
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
                    ) : (
                        <>
                            <label htmlFor="name">
                                <p className="text-[16px]/[30px] text-black font-bold mx-[3px] my-[10px]">
                                    如何稱呼你呢
                                </p>
                                <input
                                    {...register("name")}
                                    id="name"
                                    type="text"
                                    placeholder="管中閔"
                                    className="w-[360px] h-[45px] p-[10px] rounded-[8px] bg-[#F1F1EE]"
                                />
                            </label>
                            <label htmlFor="password">
                                <p className="text-[16px]/[30px] text-black font-bold mx-[3px] my-[10px]">
                                    有什麼想對我們說的話嗎～
                                </p>
                                <input
                                    {...register("shoutout")}
                                    id="shoutout"
                                    type="text"
                                    placeholder="我是歷史系的，對科技業行銷很感興趣！"
                                    className="w-[360px] h-[45px] p-[10px] rounded-[8px] bg-[#F1F1EE]"
                                />
                            </label>
                        </>
                    )}

                    {isSenior && <RegisterProgress currentStep={0} />}
                    <button
                        type="button"
                        onClick={handleNext}
                        className="w-[141px] rounded-[20px] bg-[#728594] text-white text-center font-medium my-6 py-4"
                    >
                        {isSenior ? "下一步" : "加入人脈網"}
                    </button>
                </div>
            }
        </div>
    );
};

// Step 1: Email verification waiting page
const Step1 = ({ setStep }: StepProps) => {
    const { watch } = useFormContext<RegisterFormData>();
    const email = watch("email");
    return (
        <div className="w-full px-16 gap-5 h-[465px] pt-[45px] pb-[81px] my-[30px] flex flex-col items-center bg-white">
            <h1 className="sm:text-[24px]/[35px] text-wrap text-3xl sm:text-nowrap text-center font-semibold my-[10px]">
                驗證電子郵件已寄出
                <br />
                請前往您的電子郵件進行驗證
            </h1>
            <p className="text-[14px]/[35px] font-normal text-[#5F6368]">
                沒有收到驗證連結？
                <button
                    type="button"
                    className="underline"
                    onClick={async () => {
                        await authEmailResend(email);
                        toast.success("寄送成功～請到電子郵件收信");
                    }}
                >
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
    const { user, isLoading, error } = useUser();

    useEffect(() => {
        if (!isLoading) {
            if (user && user.has_profile) {
                toast.success("您已完成註冊～感謝您成為職屬的一員～");
                router.push("/register/finish");
                return;
            }
        }
    }, [isLoading, user, error, router]);

    useEffect(() => {
        const checkUser = async () => {
            if (user) {
                if (!user.has_profile) router.push("/register/filldata");
                else router.push("/register/finish");
            }
        };
        checkUser();
    }, [user, isLoading]);
    const methods = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            isSenior: true,
        },
        mode: "onChange",
    });
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <FormProvider {...methods}>
            <form>
                <div>
                    {step === 0 && <Step0 setStep={setStep} />}
                    {step === 1 && <Step1 setStep={setStep} />}
                </div>
            </form>
        </FormProvider>
    );
};

export default RegisterPage;
