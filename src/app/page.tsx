import HomeContentSection from "@/components/section/home/HomeContentSection";
import Banner from "@/components/ui/Banner";
import { getHomePageData } from "@/lib/data";
import Image from "next/image";

export default async function Home () {
  const {articles}=await getHomePageData()
   const {editorPicksPrimary, editorPicksSecondary, trendingArticles, sliderArticles, gridArticles, mostRecentArticles, allMostRecentGridArticles, popularArticles} = articles
   console.log(trendingArticles)
  return (
    <div >
      <Banner />
      <div className="blog-container">
      {
        editorPicksPrimary && editorPicksSecondary.length> 0 && trendingArticles.length > 0 && (
          <HomeContentSection
          editorPicksPrimary={editorPicksPrimary}
          editorPicksSecondary={editorPicksSecondary}
          trendingArticles={trendingArticles}
          />
        )
      }

      {
        // sliderArticles.length > 0 && <FeaturedSliderSection articles={sliderArticles}/>
      }

      {
        // gridArticles.length > 0 && <GridAndAds articles={gridArticles}/>
      } 

      {
        mostRecentArticles.length > 0 && allMostRecentGridArticles.length > 0 && popularArticles.length > 0 && (
          // <MostRecentSection mostRecentArticles={mostRecentArticles} allMostRecentGridArticles={allMostRecentGridArticles} popularArticles={popularArticles}/>
          <p>not</p>
        )
      }


    </div>
    </div>
  );
}
