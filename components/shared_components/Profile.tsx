import React from "react";

interface Props {
    profileImg: string;
    name: string;
    career: string;
    description: string;
}

const Profile = ({ profileImg, name, career, description }: Props) => {
    return (
        <div className="flex flex-col w-full sm:w-sm sm:min-h-70 max-w-[280px] bg-[#F5F5F5] rounded-[20px] items-center p-5 gap-4 text-center">

            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-black/5 overflow-hidden">
                <img
                    src={profileImg}
                    alt={name}
                    className="w-full h-full object-cover rounded-full"
                />
            </div>

            {/* Name and Career */}
            <div className="flex flex-col w-full items-center space-y-1">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-sm text-black/50">{career}</p>
            </div>

            {/* Description */}
            <div className="w-full">
                <p className="text-sm font-medium whitespace-pre-line leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Profile;
