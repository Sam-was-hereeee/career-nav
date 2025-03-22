import ArticleColumn from "./component/ArticleColumn/ArticleColumn";
import DisplayProfile from "./component/DisplayProfile/DisplayProfile";
import ExploreProfile from "./component/ExploreProfile/ExploreProfile";
import Footer from "./component/Footer/Footer";
import NaviBar from "./component/NaviBar/NaviBar";
import NewsColumn from "./component/NewsColumn/NewsColumn";
import ProductIntro from "./component/ProductIntro/ProductIntro";
import WishBox from "./component/WishBox/WishBox";

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
