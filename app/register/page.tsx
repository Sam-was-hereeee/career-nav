"use client";

import React from "react";
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
import {router} from "next/client";

// Form Schema
const registerSchema = z.object({
  // Step 0
  isSenior: z.boolean(),
  email: z.string().email("請輸入有效的電子信箱").optional(),
  password: z.string().min(6, "密碼至少需要6個字元").optional(),

  // Step 1
  verifyCode: z.string().min(1, "請輸入驗證碼").optional(),

  // Step 2
  graduateYr: z.string().min(1, "請選擇畢業年份").optional(),
  school: z.string().min(1, "請選擇學校").optional(),
  major: z.string().min(1, "請選擇科系").optional(),
  doubleMajor: z.string().optional(),
  minor: z.string().optional(),
  studentID: z.string().min(1, "請輸入學號").optional(),

  // Step 3
  name: z.string().min(1, "請輸入本名").optional(),
  nickName: z.string().min(1, "請輸入顯示名稱").optional(),
  career: z.string().min(1, "請選擇職業名稱").optional(),
  industry: z.string().min(1, "請選擇工作產業").optional(),
  corporationName: z.string().optional(),
  field: z.array(z.string()).optional(),
  introduction: z.string().optional(),

  // Step 4
  agreement: z.boolean().refine((val) => val === true, {
    message: "請同意條款",
  }),
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
const RegisterTypeSelector = ({ isSenior, setIsSenior, handleGoogleSignup }: RegisterTypeSelectorProps) => {
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
            (!isSenior ? " border-b-[5px] font-bold" : " border-b-[1px]")
          }
          type="button"
          onClick={() => handleTypeChange(false)}
        >
          在學生
        </button>
        <button
          className={
            "w-[149.5px] h-[34px] text-center border-b-black" +
            (isSenior ? " border-b-[5px] font-bold" : " border-b-[1px]")
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
          <img src="/google-icon.svg" alt="Google" className="w-6 h-6" />
          <span className="text-[16px] font-medium text-[#444]">使用 Google 註冊</span>
        </button>
      )}
    </div>
  );
};

// Step 0: Choose type and alumni registration form
const Step0 = ({ setStep }: StepProps) => {
  const { register, watch, trigger, setValue, formState: { errors } } = useFormContext<RegisterFormData>();
  const isSenior = watch("isSenior");

  const handleNext = async () => {
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
          <h1 className="text-[32px]/[35px] text-black font-semibold mt-[28px]">建立職航帳號</h1>
          <p className="text-[16px]/[35px] text-black font-normal mb-[35px]">向學弟妹分享職涯經驗，傳承向前進的資源和動力！</p>
          <label htmlFor="email">
            <p className="text-[16px]/[30px] text-black font-bold mx-[3px] my-[10px]">電子信箱（請輸入個人常用信箱）</p>
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="個人常用 Email"
              className="w-[360px] h-[45px] p-[10px] rounded-[8px] bg-[#F1F1EE]"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </label>
          <label htmlFor="password">
            <p className="text-[16px]/[30px] text-black font-bold mx-[3px] my-[10px]">設立密碼</p>
            <input
              {...register("password")}
              id="password"
              type="password"
              placeholder="輸入密碼"
              className="w-[360px] h-[45px] p-[10px] rounded-[8px] bg-[#F1F1EE]"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
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

// Step 1: Verification code
// TODO: change this into a static waiting page
const Step1 = ({ setStep }: StepProps) => {
  const { register, trigger, formState: { errors } } = useFormContext<RegisterFormData>();

  const handleNext = async () => {
    const isValid = await trigger("verifyCode");
    if (isValid) setStep(2);
  };

  return (
    <div className="w-full px-16 gap-5 h-[465px] pt-[45px] pb-[81px] my-[30px] flex flex-col items-center bg-white">
      <h1 className="sm:text-[24px]/[35px] text-wrap text-3xl sm:text-nowrap font-semibold my-[10px]">驗證碼已寄送至你的常用信箱</h1>
      <input
        {...register("verifyCode")}
        id="verifyCode"
        type="text"
        placeholder="輸入驗證碼"
        className="w-auto h-[45px] rounded-[8px] p-[10px] my-[10px] bg-[#F1F1EE]"
      />
      {errors.verifyCode && <p className="text-red-500 text-sm">{errors.verifyCode.message}</p>}
      <p className="text-[14px]/[35px] font-normal text-[#5F6368]">
        沒有收到驗證碼？<button type="button" className="underline">重新寄送</button>
      </p>
      <RegisterProgress currentStep={1} />
      <div className="w-[349px] h-[68px] py-[10px] mb-[10px] flex justify-between">
        <button
          type="button"
          onClick={() => setStep(0)}
          className="w-[95px] h-[44px] py-[10px] gap-[10px] flex items-center text-base font-medium"
        >
          <img src="/arrow2.svg" className="w-[9.5px] h-[17px]" />上一步
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
};

// Step 2: Academic info
const Step2 = ({ setStep }: StepProps) => (
  <div className="w-full gap-5 py-[60px] flex flex-col items-center bg-white">
    <h1 className="sm:text-[24px]/[35px] text-wrap text-3xl sm:text-nowrap font-semibold my-[10px]">歡迎，感謝您願意引導學弟妹啟航！br創建個人檔案，分享自己的職涯軌跡</h1>
    <RegisterProgress currentStep={2} />
    <h2 className="text-[20px]/[30px] font-bold">學經歷資訊</h2>
    <SelectInput id="graduateYr" placeholder="選擇入學年份" optionArr={["2000", "2025"]} valueArr={["2000", "2025"]} required={true}>畢業年份</SelectInput>
    <SelectInput id="school" placeholder="選擇學校" optionArr={[]} valueArr={[]} required={true}>畢業學校</SelectInput>
    <SelectInput id="major" placeholder="選擇科系" optionArr={[]} valueArr={[]} required={true}>畢業科系</SelectInput>
    <SelectInput id="doubleMajor" placeholder="選擇雙主修科系，若無，則跳過。" optionArr={[]} valueArr={[]} required={false}>雙主修科系</SelectInput>
    <SelectInput id="minor" placeholder="選擇輔系，若無，則跳過。" optionArr={[]} valueArr={[]} required={false}>輔修科系</SelectInput>
    <TextInput id="studentID" placeholder="輸入學號" required={true}>學號</TextInput>
    <div className="w-[349px] h-[68px] py-[10px] mt-[100px] mb-[10px] flex justify-between">
      <button type="button" onClick={() => setStep(1)} className="w-[95px] h-[44px] py-[10px] gap-[10px] flex items-center text-base font-medium">
        <img src="/arrow2.svg" className="w-[9.5px] h-[17px]" />上一步
      </button>
      <button type="button" onClick={() => setStep(3)} className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-[60px]">下一步</button>
    </div>
  </div>
);

// Step 3: Personal and career info
const Step3 = ({ setStep }: StepProps) => (
  <div className="w-full gap-5 py-[60px] flex flex-col items-center bg-white">
    <h1 className="sm:text-[24px]/[35px] text-wrap text-3xl sm:text-nowrap font-semibold my-[10px]">創建個人檔案，分享自己的職涯軌跡</h1>
    <RegisterProgress currentStep={2} />
    <h2 className="text-[20px]/[30px] font-bold">個人資訊</h2>
    <TextInput id="name" description="您在此輸入的本名，不會公開於個人檔案" placeholder="輸入中文全名" required={true}>本名</TextInput>
    <TextInput id="nickName" description="請輸入您想公開在個人檔案上的名字" placeholder="輸入本名或暱稱" required={true}>個人檔案顯示名稱</TextInput>
    <h2 className="text-[20px]/[30px] font-bold mt-[50px]">職涯資訊</h2>
    <SelectInput id="career" placeholder="選擇職業名稱" optionArr={[]} valueArr={[]} required={true}>目前您的職業名稱？</SelectInput>
    <SelectInput id="industry" placeholder="選擇工作產業" optionArr={[]} valueArr={[]} required={true}>目前您的工作產業？</SelectInput>
    <TextInput id="corporationName" placeholder="輸入您的公司或機構，非必填。" required={false}>目前您所在的公司/機構名稱？</TextInput>
    <SelectInput id="field" description="選擇至多 5 項專業領域" placeholder="選擇專業領域" optionArr={[]} valueArr={[]} required={false}>您的專業領域？</SelectInput>
    <TextInput id="introduction" description="讓學弟妹更快速地認識您" placeholder="輸入個人簡介" required={false}>間單介紹自己，或是一句能代表自己的話</TextInput>
    <div className="w-[349px] h-[68px] py-[10px] mt-[100px] mb-[10px] flex justify-between">
      <button type="button" onClick={() => setStep(2)} className="w-[95px] h-[44px] py-[10px] gap-[10px] flex items-center text-base font-medium">
        <img src="/arrow2.svg" className="w-[9.5px] h-[17px]" />上一步
      </button>
      <button type="button" onClick={() => setStep(4)} className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-[60px]">下一步</button>
    </div>
  </div>
);

// Step 4: Agreement and finish
const Step4 = ({ setStep }: StepProps) => (
  <div className="w-full gap-5 py-[52px] flex flex-col items-center bg-white">
    <h1 className="sm:text-[24px]/[35px] text-wrap text-2xl sm:text-nowrap font-semibold my-[10px] whitespace-pre inline">是否以非公開形式，分享聯絡資訊？</h1>
    <RegisterProgress currentStep={3} />
    <div className="text-[13px]/[150%] space-y-6 text-center text-nowrap mb-[70px]">
      <p className="text-[#000000]">成為「職航」的引航學長姐後，<br />本平台<span className="font-bold">不會主動於公開網頁上顯示您的聯絡資訊</span>。<br />即，任何人沒有經過身份驗證、沒有經過帳號與密碼登入，<br />是無法任意瀏覽您的個人檔案的。</p>
      <p className="text-[#000000]">若您願意留下聯絡資訊，<span className="font-bold">您可自由決定是否接受學弟妹的聯絡邀請。</span><br />只有在您同意邀請後，您的個人頁面才會顯示聯絡方式，<br />供學弟妹查看並聯繫您。</p>
    </div>
    {/*要改成dialog*/}
    <button type="button" className="w-[390px] h-[40px] mb-[12px] p-[10px] text-[13px]/[150%] font-normal text-center text-nowrap rounded-[8px] bg-[#B2BEC180] border-[1px] border-[#979797]">個資保護聲明與規約條款</button>
    <p className="text-[13px]/[150%] mb-[30px] text-normal text-[#5F6368] text-nowrap whitespace-pre-line">注意事項：當您填寫並同意送出註冊資料後，即表示您已閱讀、<br/>瞭解並同意接受本服務蒐集、處理及使用您的個人資料，以及雙\n方之權利與義務。</p>
    <label htmlFor="agreement" className="flex items-center justify-center w-[390px] h-[81px] pl[55px] pr-[10px] py-[10px] rounded-[8px] bg-[#F1F1EE] border-[1px] border-[#D7D8D9]">
      <input id="agreement" name="agreement" value="check" type="checkbox" className="w-[36px] h-[36px] mr-[15px] rounded-[4px] border-[3px] border-[#596670]" required />
      <p className="text-[13px]/[150%] font-bold text-[#596670] text-nowrap whitespace-pre-line">我同意在接受學弟妹的聯絡邀請後，\n於個人頁面顯示聯絡信箱給對方</p>
    </label>
    <div className="w-[349px] h-[68px] py-[10px] mt-[100px] mb-[10px] flex justify-between">
      <button type="button" onClick={() => setStep(3)} className="w-[95px] h-[44px] py-[10px] gap-[10px] flex items-center text-base font-medium">
        <img src="/arrow2.svg" className="w-[9.5px] h-[17px]" />上一步
      </button>
      <button type="button" onClick={() => router.push("/")} className="w-[141px] h-[48px] rounded-[20px] p-[12px] bg-[#728594] text-white font-medium mb-[60px]">完成註冊</button>
    </div>
  </div>
);

const RegisterPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      isSenior: true,
      field: [],
    },
    mode: "onChange",
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      // TODO: Submit to your API
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
        <div className="w-full h-[100px] min-h-[100px]" />
        <div>
          {step === 0 && <Step0 setStep={setStep} />}
          {step === 1 && <Step1 setStep={setStep} />}
          {step === 2 && <Step2 setStep={setStep} />}
          {step === 3 && <Step3 setStep={setStep} />}
          {step === 4 && <Step4 setStep={setStep} />}
        </div>
        <Footer />
      </form>
    </FormProvider>
  );
};

export default RegisterPage;
