import React from "react";
import { Box, Typography } from "@mui/material";

import Charbagh from "../about/visitedPlaces/Charbagh";
import IronBridge from "./visitedPlaces/IronBridge";
import CentralHotel from "../about/visitedPlaces/CentralHotel";
import Masjid from "./visitedPlaces/Masjid";
import VermaMemorialHall from "../about/visitedPlaces/VermaMemorialHall";
import BegumAkhtar from "./visitedPlaces/BegumAkhtar";
import AMBCLko from "../about/visitedPlaces/AMBCLko";
import LordMeher from "./visitedPlaces/LordMeher";
import { useTranslation } from "react-i18next";

function BabaPlaces() {
  const { t } = useTranslation("About");
  return (
    <Box
      id="places"
      sx={{
        margin: "20px 60px 0 60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontFamily: "Playfair Display SC, serif" }}
      >
      {t("places-heading")}
      </Typography>
      <Charbagh />
      <IronBridge />
      <CentralHotel />
      <Masjid />
      <VermaMemorialHall />
      <BegumAkhtar />
      <AMBCLko />
      <LordMeher />
    </Box>
  );
}

export default BabaPlaces;
