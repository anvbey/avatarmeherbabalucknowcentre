import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

function Masjid() {
  const { t } = useTranslation("About");
  return (
    <Box sx={{
      margin: "20px 0"
    }}>
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
      {t("masjid-heading")}
      </Typography>
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
        {t("masjid-image")}
        </Typography>
      </Box>
    </Box>
  );
}

export default Masjid;
