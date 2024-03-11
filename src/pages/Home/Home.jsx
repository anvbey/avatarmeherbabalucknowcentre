import React from "react";
import HeroComponent from "../../components/home/HeroComponent";
import AboutMeherBaba from "../../components/home/AboutMeherBaba";
import AboutLucknowCentre from "../../components/home/AboutLucknowCentre";
import RecipeReviewCard from "../../components/home/Notification";
import Quotes from "../../components/home/Quotes";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HeroComponent/>
      <Quotes/>
      <AboutMeherBaba/>
      <Quotes/>
      <AboutLucknowCentre/>
      <Quotes/>
      <RecipeReviewCard/>

    </div>
  );
}

export default Home