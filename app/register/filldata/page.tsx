"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RegisterProgress from "@/components/RegisterInput/RegisterProgress";
import TextInput from "@/components/RegisterInput/TextInput";
import SelectInput from "@/components/RegisterInput/SelectInput";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/hook/use-user";
import toast from "react-hot-toast";
import Link from "next/link";
import { TablesInsert } from "@/database.types";
import { insertSeniorProfile } from "@lib/profile/actions";
import DictionaryInput from "@components/RegisterInput/DictionaryInput";

type UserProfile = TablesInsert<"user_senior_info">;
type UserContact = TablesInsert<"user_senior_contact">;

// const contactSchema = z.object({
//     dictionary: z
//         .array(
//             z.object({
//                 key: z.string().min(1, "請填入聯絡資料類型"),
//                 value: z.string().min(1, "請填入聯絡方式"),
//             })
//         ),
// });

// Form Schema
const registerSchema = z.object({
  // Step 1
  graduateYr: z.coerce.number().refine((val) => val < 2025 && val > 1900, {
    message: "請輸入有效的年份",
  }),
  school: z.string().min(1, "請選擇學校"),
  major: z.string().min(1, "請選擇科系"),
  doubleMajor: z.string().optional(),
  minor: z.string().optional(),
  studentID: z.string().min(1, "請輸入學號"),

  // Step 2
  name: z.string().min(1, "請輸入本名"),
  nickName: z.string().min(1, "請輸入顯示名稱"),
  career: z.string().min(1, "請選擇職業名稱"),
  industry: z.string().min(1, "請選擇工作產業"),
  corporationName: z.string().optional(),
  field: z.string().optional(),
  introduction: z.string().min(1, "請簡短介紹自己～讓學弟妹更能找到職屬"),

  // Step 3
  commonEmail: z.string().email("請輸入有效電子郵件"),
  line: z.string().optional(),
  linkedIn: z.string().optional(),
  facebook: z.string().optional(),
  others: z
    .array(
      z.object({
        key: z.string().min(1, "請填入聯絡資料類型"),
        value: z.string().min(1, "請填入聯絡方式"),
      })
    )
    .optional(),

  agreement: z.boolean().refine((val) => val === true, {
    message: "請同意條款",
  }),
});

type RegisterFormData = z.infer<typeof registerSchema>;
interface StepProps {
  setStep: (step: number) => void;
}

const industries = [
  "文化創意業",
  "行銷、廣告、公關業",
  "新聞、出版業",
  "影視、娛樂業",
  "科技業",
  "電商、零售、物流業",
  "教育業",
  "政府公部門",
  "旅遊、餐飲與休閒業",
  "人力資源業",
  "金融與投資",
  "醫療與健康產業",
  "其他",
];

// Step 1: Academic info
const Step1 = ({ setStep }: StepProps) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext<RegisterFormData>();

  const handleNext = async () => {
    const isValid = await trigger([
      "graduateYr",
      "school",
      "major",
      "studentID",
    ]);
    if (isValid) {
      setStep(2);
    } else {
      console.log(isValid);
      toast.error("請填寫所有必填欄位");
      console.log(errors);
    }
  };

  return (
    <div className="w-full gap-5 py-[60px] flex flex-col items-center bg-white">
      <h1 className="sm:text-[24px]/[35px] text-wrap text-2xl sm:text-nowrap font-semibold my-[10px]">
        歡迎，感謝您願意引導學弟妹啟航！
        <br />
        創建個人檔案，分享自己的職涯軌跡
      </h1>
      <RegisterProgress currentStep={1} />
      <h2 className="text-[20px]/[30px] font-bold">學經歷資訊</h2>
      <div className="w-[360px] mx-auto">
        <TextInput
          id="graduateYr"
          placeholder="2005..."
          type={"number"}
          required={true}
          {...register("graduateYr")}
        >
          畢業年份
        </TextInput>
        <TextInput
          id="school"
          placeholder="台大..."
          required={true}
          {...register("school")}
        >
          畢業學校
        </TextInput>
        <TextInput
          id="major"
          placeholder="外文系..."
          required={true}
          {...register("major")}
        >
          畢業科系
        </TextInput>
        <TextInput
          id="doubleMajor"
          placeholder="輸入雙主修科系，若無，則跳過。"
          required={false}
          {...register("doubleMajor")}
        >
          雙主修科系
        </TextInput>
        <TextInput
          id="minor"
          placeholder="輸入輔系，若無，則跳過。"
          required={false}
          {...register("minor")}
        >
          輔修科系
        </TextInput>
        <TextInput
          id="studentID"
          placeholder="輸入學號"
          required={true}
          {...register("studentID")}
        >
          學號
        </TextInput>
      </div>
      <div className="w-[349px] h-[68px] py-[10px] mt-[100px] mb-[10px] flex justify-between">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="w-[95px] h-[44px] py-[10px] gap-[10px] flex items-center text-base font-medium"
        >
          <img src="/arrow2.svg" className="w-[9.5px] h-[17px]" />
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
};

// Step 2: Personal and career info
const Step2 = ({ setStep }: StepProps) => {
  const {
    register,
    // formState: { errors },
    trigger,
  } = useFormContext<RegisterFormData>();

  const handleNext = async () => {
    const isValid = await trigger(["name", "nickName", "career", "industry"]);
    if (isValid) {
      setStep(3);
    } else {
      toast.error("請填寫所有必填欄位");
    }
  };

  return (
    <div className="w-full gap-5 py-[60px] flex flex-col items-center bg-white">
      <h1 className="sm:text-[24px]/[35px] text-wrap text-2xl sm:text-nowrap font-semibold my-[10px]">
        創建個人檔案，分享自己的職涯軌跡
      </h1>
      <RegisterProgress currentStep={2} />
      <h2 className="text-[20px]/[30px] font-bold">個人資訊</h2>
      <div className="w-[360px] mx-auto">
        <TextInput
          id="name"
          description="您在此輸入的本名，不會公開於個人檔案"
          placeholder="輸入中文全名"
          required={true}
          {...register("name")}
        >
          本名
        </TextInput>
        <TextInput
          id="nickName"
          description="請輸入您想公開在個人檔案上的名字"
          placeholder="輸入本名或暱稱"
          required={true}
          {...register("nickName")}
        >
          個人檔案顯示名稱
        </TextInput>
        <h2 className="text-[20px]/[30px] font-bold mt-[50px]">職涯資訊</h2>
        <TextInput
          id="career"
          placeholder="FMCG行銷專員..."
          required={true}
          {...register("career")}
        >
          目前您的職業名稱？
        </TextInput>
        <SelectInput
          id="industry"
          placeholder="選擇工作產業"
          optionArr={industries}
          valueArr={industries}
          required={true}
          {...register("industry")}
        >
          目前您的工作產業？
        </SelectInput>
        <TextInput
          id="corporationName"
          placeholder="輸入您的公司或機構，非必填。"
          required={false}
          {...register("corporationName")}
        >
          目前您所在的公司/機構名稱？
        </TextInput>
        <TextInput
          id="field"
          description="請輸入您工作相關的技能，可輸入多項"
          placeholder="如：數位行銷、業務開發"
          required={false}
          {...register("field")}
        >
          您的專業領域？
        </TextInput>
        <TextInput
          id="introduction"
          description="讓學弟妹更快速地認識您"
          placeholder="輸入個人簡介"
          required={true}
          {...register("introduction")}
        >
          簡單介紹自己，或是一句能代表自己的話
        </TextInput>
      </div>
      <div className="w-[349px] h-[68px] py-[10px] mt-[100px] mb-[10px] flex justify-between">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="w-[95px] h-[44px] py-[10px] gap-[10px] flex items-center text-base font-medium"
        >
          <img src="/arrow2.svg" className="w-[9.5px] h-[17px]" />
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
};

// Step 3: Agreement and finish
const Step3 = ({
  setStep,
}: StepProps & { onSubmit: (data: RegisterFormData) => void }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<RegisterFormData>();

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
      <div className="w-[360px] mx-auto">
        <TextInput
          id="commonEmail"
          description="輸入您願意與學弟妹聯絡的電子信箱"
          placeholder="example@gmail.com"
          required={true}
          {...register("commonEmail")}
        >
          電子郵件
        </TextInput>
        <TextInput
          id="linkedIn"
          placeholder="https://"
          required={false}
          {...register("linkedIn")}
        >
          LinkedIn
        </TextInput>
        <TextInput
          id="line"
          placeholder="@lineId"
          required={false}
          {...register("line")}
        >
          Line Id
        </TextInput>
        <TextInput
          id="facebook"
          placeholder="https://www.facebook.com..."
          required={false}
          {...register("facebook")}
        >
          Facebook
        </TextInput>
        <DictionaryInput id={"others"}>輸入其他聯絡方式</DictionaryInput>
      </div>
      <Link
        href={
          "https://noon-crab-b6a.notion.site/1eb41af62e158008953df9f02cf8995e"
        }
        target={"_blank"}
        className="w-[390px] h-[40px] mb-[12px] p-[10px] text-[13px]/[150%] font-normal text-center text-nowrap rounded-[8px] bg-[#B2BEC180] border-[1px] border-[#979797]"
      >
        個資保護聲明與規約條款
      </Link>
      <p className="text-[13px]/[150%] mb-[30px] text-normal text-[#5F6368] text-nowrap whitespace-pre-line">
        注意事項：當您填寫並同意送出註冊資料後，即表示您已閱讀、
        <br />
        瞭解並同意接受本服務蒐集、處理及使用您的個人資料，以及雙方之權利與義務。
      </p>
      <label
        htmlFor="agreement"
        className="flex items-center justify-center w-[390px] h-[81px] pl[55px] pr-[10px] py-[10px] rounded-[8px] bg-[#F1F1EE] border-[1px] border-[#D7D8D9]"
      >
        <input
          id="agreement"
          type="checkbox"
          className="w-[36px] h-[36px] mr-[15px] rounded-[4px] border-[3px] border-[#596670]"
          {...register("agreement")}
        />
        <p className="text-[13px]/[150%] font-bold text-[#596670] text-nowrap whitespace-pre-line">
          {"我同意在接受學弟妹的聯絡邀請後，\n於個人頁面顯示聯絡信箱給對方"}
        </p>
      </label>
      {errors.agreement && (
        <p className="text-red-500 text-sm mt-1">{errors.agreement.message}</p>
      )}
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
};

const FillDataPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const { user, isLoading, error, refetchUser } = useUser();
  const onSubmit = async (data: RegisterFormData) => {
    console.log("handling submit");
    const profile: UserProfile = {
      user_id: user ? user.id : "fuck", // this must come from your auth session
      agreement: data.agreement,
      graduate_year: data.graduateYr?.toString(),
      school: data.school,
      major: data.major,
      double_major: data.doubleMajor ?? null,
      minor: data.minor ?? null,
      student_id: data.studentID,
      name: data.name,
      nickname: data.nickName,
      career: data.career,
      industry: data.industry,
      corporation_name: data.corporationName ?? null,
      fields: [data.field ?? ""],
      introduction: data.introduction,
    };
    const contact: UserContact = {
      user_id: user ? user.id : "fuck",
      email: data.commonEmail,
      line_id: data.line,
      linkedin: data.linkedIn,
      facebook: data.facebook,
      others: data.others,
    };
    try {
      const { data, error } = await insertSeniorProfile(profile, contact);
      console.log(data);
      if (error) {
        console.log(error);
        toast.error("提交失敗，請稍後再試");
        return;
      }
      toast.success("歡迎加入職屬的一員～");
      refetchUser();
      router.push("/register/finish");
    } catch (error) {
      console.error(error);
      toast.error("提交失敗，請稍後再試");
    }
  };

  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      field: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (!isLoading) {
      if (error || !user) {
        router.push("/login");
        return;
      }

      if (user.has_profile) {
        router.push("/register/finish");
        return;
      }
    }
  }, [isLoading, user, error, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          {step === 1 && <Step1 setStep={setStep} />}
          {step === 2 && <Step2 setStep={setStep} />}
          {step === 3 && <Step3 setStep={setStep} onSubmit={onSubmit} />}
        </div>
      </form>
    </FormProvider>
  );
};

export default FillDataPage;
