import ExploreProfile from "./component/ExploreProfile/ExploreProfile";
import NaviBar from "./component/NaviBar/NaviBar";
import NewsColumn from "./component/NewsColumn/NewsColumn";
import ProductIntro from "./component/ProductIntro/ProductIntro";

export default function Home() {
  return (
    <main>
      <div>
        <NaviBar currentPage={0} />
        <ProductIntro />
        <ExploreProfile />
        <NewsColumn />
      </div>
    </main>
  );
}
