import React from "react";
import { Box } from "@mui/material";

import Alert from "../../components/home/Alert"
import HeroComponent from "../../components/home/HeroComponent";
import Quotes from "../../components/home/Quotes";
import AboutMeherBaba from "../../components/home/AboutMeherBaba";
import AboutLucknowCentre from "../../components/home/AboutLucknowCentre";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Alert />
      <HeroComponent />
      <Quotes quote={"There is no such thing as \‘failure\’ on the journey towards Truth or God. It is merely a question of time."} reference={"The Awakener Magazine I/2/33"}/>
      <AboutMeherBaba />
      <Quotes quote={"I am the joy in your heart and the despair of your mind - for love can attain that which the intellect cannot fathom."} reference={"Meher Baba Calling, Pg. 94"}/>
      <AboutLucknowCentre />
    </Box>
  );
}

export default Home;