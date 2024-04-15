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

function BabaPlaces() {
  return (
    <Box id="places">
      <Typography variant="h3" sx={{ fontFamily: 'Playfair Display SC, serif' }} >Places of Lucknow related to Meher Baba</Typography>
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
