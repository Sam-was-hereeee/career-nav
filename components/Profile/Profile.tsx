import React from "react";

interface Props {
  profileImg: string;
  name: string;
  career: string;
  description: string;
}

const Profile = ({ profileImg, name, career, description }: Props) => {
  return (
    <div className="flex flex-col w-[287px] h-[341px] rounded-[20px] py-[30px] bg-[#F5F5F5] items-center gap-[20px] text-center">
      <div
        id="profileImg"
        className="w-[100px] h-[100px] rounded-full bg-black/5"
      >
        <img className="object-cover rounded-full" src={profileImg} />
      </div>
      <div className="flex flex-col w-full h-[57px] items-center text-nowrap">
        <h3 className="text-[20px]/[28px] font-bold">{name}</h3>
        <p className="text-base text-black/50">{career}</p>
      </div>
      <div className="w-full h-[72px]">
        <p
          id="description"
          className="text-[20px]/[32px] font-medium whitespace-pre"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Profile;
