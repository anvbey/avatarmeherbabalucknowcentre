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
      <Alert/>
      <HeroComponent />
      <Quotes quote={"If you have the peace of a frozen lake, you will realize Me."} reference={"Meher Baba Calling"}/>
      <AboutMeherBaba />
      <Quotes quote={"Wage war against your desires and Godhood will be your victory.	"} reference={"Meher Baba Calling"}/>
      <AboutLucknowCentre />
    </Box>
  );
}

export default Home;