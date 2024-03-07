import React from "react";
import HeroComponent from "../../components/home/HeroComponent";
import AboutMeherBaba from "../../components/home/AboutMeherBaba";
import AboutLucknowCentre from "../../components/home/AboutLucknowCentre";
import RecipeReviewCard from "../../components/home/Notification";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin:"20px"
      }}
    >
      <HeroComponent/>
      <AboutMeherBaba/>
      <AboutLucknowCentre/>
      <RecipeReviewCard/>

    </div>
  );
}

export default Home