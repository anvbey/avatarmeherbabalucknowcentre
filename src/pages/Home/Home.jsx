import React from "react";
import HeroComponent from "../../components/home/HeroComponent";
import About from "../../components/home/About";
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
      <About/>
      <RecipeReviewCard/>

    </div>
  );
}

export default Home