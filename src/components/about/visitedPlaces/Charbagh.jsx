import { Box, Typography } from "@mui/material";
import React from "react";
import image from "../../../assets/charbagh.png";
import { useTranslation } from "react-i18next";

function Charbagh() {
  const { t } = useTranslation("About");
  return (
    <Box
      sx={{
        margin: "20px 0",
      }}
    >
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
        {t("charbagh-heading")}
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
            src={image}
            alt="description"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
          />
          <Typography variant="body1" style={{ margin: "10px" }}>
            {t("charbagh-image")}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          {t("charbagh-description")}
        </Typography>
      </Box>
    </Box>
  );
}

export default Charbagh;
