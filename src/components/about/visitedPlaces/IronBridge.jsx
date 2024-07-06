import { Box, Typography } from "@mui/material";
import React from "react";
import ironBridge from "../../../assets/ironBridge.jpg";
import { useTranslation } from "react-i18next";

function IronBridge() {
  const { t } = useTranslation("About");
  return (
    <Box
      sx={{
        margin: "20px 0",
      }}
    >
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
        {t("iron-bridge-heading")}
      </Typography>
      <Box sx={{ display: "block" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img
            src={ironBridge}
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
            {t("iron-bridge-image")}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          {t("iron-bridge-description")}
        </Typography>
      </Box>
    </Box>
  );
}

export default IronBridge;
