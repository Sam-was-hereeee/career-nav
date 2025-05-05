"use client";

import React, {useEffect} from "react";
import NaviBar from "@/components/shared_components/NaviBar/NaviBar";
import Footer from "@/components/shared_components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RegisterProgress from "@/components/RegisterInput/RegisterProgress";
import TextInput from "@/components/RegisterInput/TextInput";
import SelectInput from "@/components/RegisterInput/SelectInput";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {TablesInsert, Tables} from "@/database.types";
import {getUserInfo} from "@lib/auth/actions";

type UserInfo = Tables<"stepsenior_users">
type SeniorProfile = TablesInsert<"user_senior_info">



// Form Schema
const registerSchema = z.object({

    // Step 1
    graduateYr: z.number().refine((val)=>val<2025 && val>1900, {
        message: '請輸入年份'
    }),
    school: z.string().min(1, "請選擇學校"),
    major: z.string().min(1, "請選擇科系"),
    doubleMajor: z.string().optional(),
    minor: z.string().optional(),
    studentID: z.string().min(1, "請輸入學號").optional(),

    // Step 2
    name: z.string().min(1, "請輸入本名"),
    nickName: z.string().min(1, "請輸入顯示名稱"),
    career: z.string().min(1, "請選擇職業名稱"),
    industry: z.string().min(1, "請選擇工作產業"),
    corporationName: z.string().optional(),
    field: z.array(z.string()).optional(),
    introduction: z.string().optional(),

    // Step 3
    agreement: z.boolean().refine((val) => val === true, {
        message: "請同意條款",
    }),
});

type RegisterFormData = z.infer<typeof registerSchema>;
interface StepProps {
    setStep: (step: number) => void;
}


// Step 1: Academic info
const Step1 = ({ setStep }: StepProps) =>
{
    const {
        trigger,
        formState: { errors },
    } = useFormContext();

    const handleNext = async () => {
        const valid = await trigger([
            "graduateYr",
            "school",
            "major",
            "studentID",
        ]);
        if (valid) setStep(2);
        else console.log("validation failed", errors);
    };
    return (

    <div className="w-full gap-2 py-10 flex flex-col items-center bg-white">
        <h1 className="sm:text-[24px]/[35px] text-wrap text-2xl sm:text-nowrap font-semibold my-[10px]">
            歡迎，感謝您願意引導學弟妹啟航！<br/>創建個人檔案，分享自己的職涯軌跡
        </h1>
        <RegisterProgress currentStep={2} />
        <h2 className="text-[20px]/[30px] font-bold">學經歷資訊</h2>
        <TextInput
            id="graduateYr"
            placeholder="1995..."
            required={true}
        >
            畢業年份
        </TextInput>
        <TextInput
            id="school"
            placeholder="台大..."
            required={true}
        >
            畢業學校
        </TextInput>
        <TextInput
            id="major"
            placeholder="外文系..."
            required={true}
        >
            畢業科系
        </TextInput>
        <TextInput
            id="doubleMajor"
            placeholder="填寫雙主修科系，若無，則跳過。"
            required={false}
        >
            雙主修科系
        </TextInput>
        <TextInput
            id="minor"
            placeholder="填寫輔系，若無，則跳過。"
            required={false}
        >
            輔修科系
        </TextInput>
        <TextInput id="studentID" placeholder="輸入學號" required={true}>
            學號
        </TextInput>
        <div className="w-[349px] h-[68px] py-[10px] mt-5 mb-[10px] flex justify-between">
            <button
                type="button"
                onClick={handleNext}
                className="mx-auto w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-[60px]"
            >
                下一步
            </button>
        </div>
    </div>
);
}

// Step 2: Personal and career info
const Step2 = ({ setStep }: StepProps) => {
    const { trigger } = useFormContext<RegisterFormData>();
    const handleNext = async () => {
        const isValid = await trigger([
            "name",
            "nickName",
            "career",
            "industry",
            "corporationName",
            "field",
            "introduction",
        ]);
        if (isValid) setStep(3);
    };
    return(
        <div className="w-full gap-5 py-10 flex flex-col items-center bg-white">
            <h1 className="sm:text-[24px]/[35px] text-wrap text-2xl sm:text-nowrap font-semibold my-[10px]">
                創建個人檔案，分享自己的職涯軌跡
            </h1>
            <RegisterProgress currentStep={2}/>
            <h2 className="text-[20px]/[30px] font-bold">個人資訊</h2>
            <TextInput
                id="name"
                description="您在此輸入的本名，不會公開於個人檔案"
                placeholder="輸入中文全名"
                required={true}
            >
                本名
            </TextInput>
            <TextInput
                id="nickName"
                description="請輸入您想公開在個人檔案上的名字"
                placeholder="輸入本名或暱稱"
                required={true}
            >
                個人檔案顯示名稱
            </TextInput>
            <h2 className="text-[20px]/[30px] font-bold mt-[50px]">職涯資訊</h2>
            <SelectInput
                id="career"
                placeholder="選擇職業名稱"
                optionArr={[]}
                valueArr={[]}
                required={true}
            >
                目前您的職業名稱？
            </SelectInput>
            <SelectInput
                id="industry"
                placeholder="選擇工作產業"
                optionArr={[]}
                valueArr={[]}
                required={true}
            >
                目前您的工作產業？
            </SelectInput>
            <TextInput
                id="corporationName"
                placeholder="輸入您的公司或機構，非必填。"
                required={false}
            >
                目前您所在的公司/機構名稱？
            </TextInput>
            <SelectInput
                id="field"
                description="選擇至多 5 項專業領域"
                placeholder="選擇專業領域"
                optionArr={[]}
                valueArr={[]}
                required={false}
            >
                您的專業領域？
            </SelectInput>
            <TextInput
                id="introduction"
                description="讓學弟妹更快速地認識您"
                placeholder="輸入個人簡介"
                required={true}
            >
                間單介紹自己，或是一句能代表自己的話
            </TextInput>
            <div className="w-[349px] h-[68px] py-[10px] mt-[100px] mb-[10px] flex justify-between">
                <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-[95px] h-[44px] py-[10px] gap-[10px] flex items-center text-base font-medium"
                >
                    <img src="/arrow2.svg" className="w-[9.5px] h-[17px]"/>
                    上一步
                </button>
                <button
                    type="button"
                    onClick={handleNext}
                    className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-[60px]"
                >
                    下一步
                </button>
            </div>
        </div>
    );
}

// Step 3: Agreement and finish
const Step3 = ({ setStep }: StepProps) => {
    const router = useRouter();
    return (
    <div className="w-full gap-5 py-[52px] flex flex-col items-center bg-white">
        <h1 className="sm:text-[24px]/[35px] text-wrap text-2xl sm:text-nowrap font-semibold my-[10px] whitespace-pre inline">
            是否以非公開形式，分享聯絡資訊？
        </h1>
        <RegisterProgress currentStep={3} />
        <div className="text-[13px]/[150%] space-y-6 text-center text-nowrap mb-[70px]">
            <p className="text-[#000000]">
                成為「職屬」的引航學長姐後，
                <br />
                本平台
                <span className="font-bold">
                    不會主動於公開網頁上顯示您的聯絡資訊
                </span>
                。<br />
                即，任何人沒有經過身份驗證、沒有經過帳號與密碼登入，
                <br />
                是無法任意瀏覽您的個人檔案的。
            </p>
            <p className="text-[#000000]">
                若您願意留下聯絡資訊，
                <span className="font-bold">
                    您可自由決定是否接受學弟妹的聯絡邀請。
                </span>
                <br />
                只有在您同意邀請後，您的個人頁面才會顯示聯絡方式，
                <br />
                供學弟妹查看並聯繫您。
            </p>
        </div>
        {/*要改成dialog*/}
        <button
            type="button"
            className="w-[390px] h-[40px] mb-[12px] p-[10px] text-[13px]/[150%] font-normal text-center text-nowrap rounded-[8px] bg-[#B2BEC180] border-[1px] border-[#979797]"
        >
            個資保護聲明與規約條款
        </button>
        <p className="text-[13px]/[150%] mb-[30px] text-normal text-[#5F6368] text-nowrap whitespace-pre-line">
            注意事項：當您填寫並同意送出註冊資料後，即表示您已閱讀、
            <br />
            瞭解並同意接受本服務蒐集、處理及使用您的個人資料，以及雙\n方之權利與義務。
        </p>
        <label
            htmlFor="agreement"
            className="flex items-center justify-center w-[390px] h-[81px] pl[55px] pr-[10px] py-[10px] rounded-[8px] bg-[#F1F1EE] border-[1px] border-[#D7D8D9]"
        >
            <input
                id="agreement"
                name="agreement"
                value="check"
                type="checkbox"
                className="w-[36px] h-[36px] mr-[15px] rounded-[4px] border-[3px] border-[#596670]"
                required
            />
            <p className="text-[13px]/[150%] font-bold text-[#596670] text-nowrap whitespace-pre-line">
                我同意在接受學弟妹的聯絡邀請後，\n於個人頁面顯示聯絡信箱給對方
            </p>
        </label>
        <div className="w-[349px] h-[68px] py-[10px] mt-[100px] mb-[10px] flex justify-between">
            <button
                type="button"
                onClick={() => setStep(2)}
                className="w-[95px] h-[44px] py-[10px] gap-[10px] flex items-center text-base font-medium"
            >
                <img src="/arrow2.svg" className="w-[9.5px] h-[17px]" />
                上一步
            </button>
            <button
                type="submit"
                className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-[60px]"
            >
                完成註冊
            </button>
        </div>
    </div>
);
}

const FillDataPage = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);

    const methods = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            field: [],
        },
        mode: "onChange",
    });

    useEffect(() => {
        const checkUserProfile = async () => {
            try {
                const { data, error } = await getUserInfo();

                if (error || !data) {
                    // If there's an error or no data, redirect to login
                    router.push("/login");
                    return;
                }
                const user: UserInfo = data;
                if (user.has_profile) {
                    // If user already has a profile, redirect to home
                    router.push("/");
                    return;
                }
            } catch (error) {
                console.error("Error checking user profile:", error);
                router.push("/login");
            }
        };

        checkUserProfile();
    }, [router]);

    const onSubmit = async (data: RegisterFormData) => {

        try {
            console.log(data);
            router.push("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <NaviBar currentPage={5} />
                <div>
                    {step === 1 && <Step1 setStep={setStep} />}
                    {step === 2 && <Step2 setStep={setStep} />}
                    {step === 3 && <Step3 setStep={setStep} />}
                </div>
                <Footer />
            </form>
        </FormProvider>
    );
};

export default FillDataPage;
