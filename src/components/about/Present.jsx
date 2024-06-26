import React from "react";
import { Box, Typography } from "@mui/material";

import AboutCenter from "./AboutCentre";
import { useTranslation } from "react-i18next";

function Present() {
  const { t } = useTranslation("About");
  return (
    <Box id="present"
      sx={{
        margin: "20px 60px 0 60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
      <Typography
        variant="h4"
        sx={{
          marginBottom: "20px",
          fontFamily: "Playfair Display SC, serif",
        }}
      >
      {t("history-heading")}
      </Typography>
      <AboutCenter />
    </Box>
  );
}

export default Present;