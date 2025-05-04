import React from "react";
import NaviBar from "@/components/shared_components/NaviBar/NaviBar";
import LoginInput from "@components/LoginInput/LoginInput";
import Footer from "@/components/shared_components/Footer";

const LoginPage = () => {
  return (
    <div>
      <NaviBar currentPage={5} />
      <LoginInput></LoginInput>
      <Footer />
    </div>
  );
};

export default LoginPage;
