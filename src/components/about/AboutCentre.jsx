import React from "react";
import { Box, Typography } from "@mui/material";

import amblko from "../../assets/AMBLKO.jpg";
import { useTranslation } from "react-i18next";

function AboutCentre() {
  const { t } = useTranslation("About");
  return (
    <Box>
      <Box sx={{ display: "block" }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
          dangerouslySetInnerHTML={{ __html: t("history-description") }}
        >
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
      {t("about-center-heading")}
      </Typography>
      <Box sx={{ display: "block" }}>
        <Box
          sx={{
            float: "right",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <img
            src={amblko}
            alt="description"
            style={{ maxWidth: "70%", height: "auto", borderRadius: "10px" }} // Modified style here
          />
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
              padding: "10px",
            }}
          >
          {t("about-center-image")}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
          dangerouslySetInnerHTML={{ __html: t("about-center-description") }}
        >
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutCentre;
