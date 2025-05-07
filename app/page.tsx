import JoinSeniorBar from "@components/main_page/JoinSeniorBar";
import ArticleColumn from "@/components/shared_components/ArticleColumn";
import DisplayProfile from "@/components/main_page/DisplayProfile";
import ExploreProfile from "@components/ExploreProfile/ExploreProfile";
import WishBox from "@components/WishBox/WishBox";
import CoreService from "@/components/main_page/CoreService";
import AboutUs from "@/components/main_page/AboutUs";

export default function Home() {
  return (
    <div className={"flex flex-col gap-0"}>
      <JoinSeniorBar />
      <ExploreProfile />
      <CoreService />
      <AboutUs />
      <DisplayProfile />
      <ArticleColumn />
      <WishBox />
    </div>
  );
}
