import React from "react";
import NaviBar from "@/components/shared_components/NaviBar/NaviBar";
import NotFound404 from "@/components/unfinished/NotFound404";
import Footer from "@/components/shared_components/Footer";

const AboutPage = () => {
  return (
    <div>
      <NaviBar currentPage={2} />
      <div className="w-full h-[100px] min-h-[100px]" />
      <NotFound404 />
      <Footer />
    </div>
  );
};

export default AboutPage;
