import { Box, Typography } from "@mui/material";
import React from "react";
import lordMeher from "../../../assets/lordMeher.png";
import { useTranslation } from "react-i18next";

function LordMeher() {
  const { t } = useTranslation("About");
  return (
    <Box
      sx={{
        margin: "20px 0",
      }}
    >
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
      {t("lord-meher-heading")}
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img
            src={lordMeher}
            alt="description"
            style={{ maxWidth: "50%", height: "auto", borderRadius: "10px" }}
          />
          <Typography variant="body1" style={{ padding: "10px" }}>
          {t("lord-meher-image")}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
        {t("lord-meher-description")}
        </Typography>
      </Box>
    </Box>
  );
}

export default LordMeher;
