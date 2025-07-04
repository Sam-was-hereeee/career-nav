import Image from "next/image";

const AboutUs = () => {
  return (
    <div
      id="AboutUs"
      className="w-full py-12 flex flex-col justify-center items-center gap-[33px] bg-[#F1F1EE]"
    >
      <h3 className="text-[32px]/[120%] font-bold text-black text-center text-nowrap">
        關於我們
      </h3>
      <p className="text-[16px]/[150%] font-normal text-black text-center px-5 sm:text-nowrap">
        我們是一群來自台大文學院與管理學院的學生，渴望打造更友善的職涯探索環境。
        <br />
        我們希望科系背景、職涯經驗的差距不再是進入心儀職業的阻礙，
        <br />
        而是可以透過分享、傳承，轉化為陪伴學生邁向理想職業的動力。
      </p>

      {/* 追蹤我們 */}
      <div className="flex flex-col items-center gap-2 mt-6">
        <p className="text-[16px]/[150%] font-semibold text-black">追蹤我們</p>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/step.senior/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6 relative"
          >
            <Image
              src="/icon/instagram.svg"
              alt="Instagram"
              className="hover:opacity-70 object-contain"
              fill
            />
          </a>
          <a
            href="https://www.threads.com/@step.senior?xmt=AQGzImR-myeNS3_nyRQoGSjJ4T5rQX5F9Jx3mRAi3r50SCc"
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6 relative"
          >
            <Image
              src="/icon/threads.svg"
              alt="Threads"
              className="hover:opacity-70 object-contain"
              fill
            />
          </a>
          <a
            href="https://www.linkedin.com/company/%E8%81%B7%E8%88%AA"
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6 relative"
          >
            <Image
              src="/icon/linkedin.svg"
              alt="LinkedIn"
              className="hover:opacity-70 object-contain"
              fill
            />
          </a>
        </div>
      </div>

      <div className="w-3/5 aspect-[234/250] rounded-[20px] relative">
        <Image
          src="/group_photo.png"
          alt="group photo"
          className="object-contain"
          fill
        ></Image>
      </div>
    </div>
  );
};

export default AboutUs;
