import React from "react";
import HeroComponent from "../../components/home/HeroComponent";
import AboutMeherBaba from "../../components/home/AboutMeherBaba";
import AboutLucknowCentre from "../../components/home/AboutLucknowCentre";
import Quotes from "../../components/home/Quotes";
import { Box } from "@mui/material";

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
