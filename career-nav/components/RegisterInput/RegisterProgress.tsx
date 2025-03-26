"use client";

interface Props {
  currentStep: number;
}

const RegisterProgress = ({ currentStep }: Props) => {
  const steps = [
    { id: 0, name: "建立帳號" },
    { id: 1, name: "電子郵件驗證" },
    { id: 2, name: "建立個人檔案" },
    { id: 3, name: "完成" },
  ];

  return (
    <div className="w-[380px] max-w-3xl py-10 px-4">
      <div className="relative">
        {/* Connector lines */}
        <div className="absolute top-3 left-0 right-0 h-0.5 bg-black" />

        {/* Steps */}
        <div className="relative w-[385px] left-[-27px] top-1 flex justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              {/* Circle indicator */}
              <div
                className={`w-[13px] h-[13px] p-[7px] rounded-full border-[1px] border-black flex items-center justify-center z-10 
                  ${
                    index <= currentStep
                      ? "bg-black border-black"
                      : "bg-white border-gray-300"
                  }`}
              >
                <span className="sr-only">Step {index + 1}</span>
              </div>

              {/* Step label */}
              <div className="mt-3 text-center">
                <span className="text-base font-normal">{step.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisterProgress;
