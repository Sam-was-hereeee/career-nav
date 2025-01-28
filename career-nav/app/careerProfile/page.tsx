import React from "react";
import NaviBar from "../component/NaviBar/NaviBar";
import ExploreProfile from "../component/ExploreProfile/ExploreProfile";

const CareerProfilePage = () => {
  return (
    <div>
      <NaviBar currentPage={1} />
      <div className="w-full h-[100px] min-h-[100px]" />
      <ExploreProfile />
    </div>
  );
};

export default CareerProfilePage;
