import ArticleColumn from "@components/Article/ArticleColumn";
import DisplayProfile from "@components/DisplayProfile/DisplayProfile";
import ExploreProfile from "@components/ExploreProfile/ExploreProfile";
import Footer from "@components/Footer/Footer";
import NaviBar from "@components/NaviBar/NaviBar";
import NewsColumn from "@components/NewsColumn/NewsColumn";
import ProductIntro from "@components/ProductIntro/ProductIntro";
import WishBox from "@components/WishBox/WishBox";

export default function Home() {
  return (
    <main>
      <div>
        <NaviBar currentPage={0} />
        <div className="w-full h-[98px] min-h-[98px]" />
        <ProductIntro />
        <ExploreProfile />
        <NewsColumn />
        <DisplayProfile />
        <ArticleColumn />
        <WishBox />
        <Footer />
      </div>
    </main>
  );
}
