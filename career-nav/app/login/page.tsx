import React from "react";
import NaviBar from "../component/NaviBar/NaviBar";
import LoginInput from "../component/LoginInput/LoginInput";
import WishBox from "../component/WishBox/WishBox";
import Footer from "../component/Footer/Footer";

const loginPage = () => {
  return (
    <div>
      <NaviBar currentPage={5} />
      <div className="w-full h-[100px] min-h-[100px]" />
      <LoginInput></LoginInput>
      <WishBox />
      <Footer />
    </div>
  );
};

export default loginPage;
