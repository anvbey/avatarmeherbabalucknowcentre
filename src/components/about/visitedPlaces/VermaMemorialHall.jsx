import { Box, Typography } from "@mui/material";
import React from "react";
import vermaHall from "../../../assets/vermaHall.png";
import { useTranslation } from "react-i18next";

function VermaMemorialHall() {
  const { t } = useTranslation("About");
  return (
    <Box
      sx={{
        margin: "20px 0",
      }}
    >
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
      {t("ganga-prasad-heading")}
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
            src={vermaHall}
            alt="description"
            style={{ maxWidth: "50%", height: "auto", borderRadius: "10px" }}
          />
          <Typography
            variant="body1"
            style={{ padding: "10px" }}
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
          {t("ganga-prasad-image")}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
        {t("ganga-prasad-description")}
        </Typography>
      </Box>
    </Box>
  );
}

export default VermaMemorialHall;
