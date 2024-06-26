import { Box, Typography } from "@mui/material";
import React from "react";
import central from "../../../assets/central.jpg";
import { useTranslation } from "react-i18next";

function CentralHotel() {
  const { t } = useTranslation("About");
  return (
    <Box
      sx={{
        margin: "20px 0",
      }}
    >
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
      {t("central-hotel-heading")}
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
            src={central}
            alt="description"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
          />
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
            style={{ padding: "10px" }}
          >
          {t("central-hotel-image")}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
        {t("central-hotel-description")}")
        </Typography>
      </Box>
    </Box>
  );
}

export default CentralHotel;
