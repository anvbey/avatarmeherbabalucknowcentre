import React from "react";
import { Box } from "@mui/material";

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
      }}
    >
      <HeroComponent />
      <Quotes />
      <AboutMeherBaba />
      <Quotes />
      <AboutLucknowCentre />
    </Box>
  );
}

export default Home;