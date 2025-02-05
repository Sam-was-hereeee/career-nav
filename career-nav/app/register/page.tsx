import React from "react";
import NaviBar from "../component/NaviBar/NaviBar";
import Footer from "../component/Footer/Footer";

const registerPage = () => {
  return (
    <div>
      <NaviBar currentPage={5} />
      <div className="w-full h-[100px] min-h-[100px]" />
      <Footer />
    </div>
  );
};

export default registerPage;
