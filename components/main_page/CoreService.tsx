import React from "react";

const CoreService = () => {
  const services: { image: string; title: string; description: string }[] = [
    {
      image: "/services/1.svg",
      title: "職業訪談",
      description: "訪談 10+ 位學長姐，\n了解學經歷如何接軌職涯",
    },
    {
      image: "/services/2.svg",
      title: "職涯導師媒合",
      description: "協助探索職涯的學生，\n建立與業界學長姐的連結",
    },
    {
      image: "/services/3.svg",
      title: "求職資源整合",
      description: "分享適合文學院學生的\n職業資源與求職技巧",
    },
  ];

  return (
    <div className="w-ful py-10 sm:py-24 border-b-2 flex flex-col sm:flex-row justify-center items-center gap-[51px] bg-[#F1F1EE]">
      <div className="flex flex-col items-center gap-[10px]">
        <h3 className="text-[32px]/[120%] font-bold text-black text-center text-nowrap">
          核心服務
        </h3>
        <p className="text-[16px]/[150%] font-normal text-black text-center text-nowrap">
          目前我們已與多位學長姐聯絡、確定合作關係，
          <br />
          誠摯感謝學長姐們的善意協助！
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-[40px]">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-[241px] h-[296px] rounded-[20px] py-[32px] flex flex-col items-center gap-[20px] bg-white shadow-lg"
          >
            <img className="h-[100px]" src={service.image} alt="service" />
            <h5 className="text-base font-bold text-black text-center text-nowrap">
              {service.title}
            </h5>
            <p className="text-[16px]/[150%] font-normal text-black text-center whitespace-pre-line">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreService;
