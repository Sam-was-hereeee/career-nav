import React from "react";
import NaviBar from "@/components/shared_components/NaviBar/NaviBar";
import Footer from "@/components/shared_components/Footer";
import NotFound404 from "@/components/unfinished/NotFound404";

const MorePage = () => {
  return (
    <div>
      <NaviBar currentPage={4} />
      <div className="w-full h-[100px] min-h-[100px]" />
      <NotFound404 />
      <Footer />
    </div>
  );
};

export default MorePage;
