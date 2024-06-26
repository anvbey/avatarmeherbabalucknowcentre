import React from "react";
import { Box } from "@mui/material";

import Alert from "../../components/home/Alert"
import HeroComponent from "../../components/home/HeroComponent";
import Quotes from "../../components/home/Quotes";
import AboutMeherBaba from "../../components/home/AboutMeherBaba";
import AboutLucknowCentre from "../../components/home/AboutLucknowCentre";

import { useTranslation } from "react-i18next";

function Home() {
  
  const { t } = useTranslation("Home");
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
      <Quotes quote={t("quote-1")} reference={t("quote1-reference")}/>
      <AboutMeherBaba />
      <Quotes quote={t("quote-2")} reference={t("quote2-reference")}/>
      <AboutLucknowCentre />
    </Box>
  );
}

export default Home;