import React from "react";
import NaviBar from "@/components/shared_components/NaviBar/NaviBar";
import Footer from "@/components/shared_components/Footer";
import AboutUs from "@components/main_page/AboutUs";

const AboutPage = () => {
  return (
    <div>
      <NaviBar currentPage={2} />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutPage;
