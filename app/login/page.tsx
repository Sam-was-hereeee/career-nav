import React from "react";
import NaviBar from "@components/NaviBar/NaviBar";
import LoginInput from "@components/LoginInput/LoginInput";
import WishBox from "@components/WishBox/WishBox";
import Footer from "@components/Footer/Footer";

const LoginPage = () => {
  return (
    <div>
      <NaviBar currentPage={5} />
      <div className="w-full h-[100px] min-h-[100px]" />
      <LoginInput></LoginInput>
      <Footer />
    </div>
  );
};

export default LoginPage;
