import React from "react";
import { Box, Typography } from "@mui/material";
import mbImage from "../../assets/overviewMB.jpg";
import { useTranslation } from "react-i18next";

function Overview() {
  const { t } = useTranslation("About");
  return (
    <Box
      id="overview"
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
        {t("overview-heading")}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "40px",
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        {t("overview-description")}
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={mbImage}
          width="50%"
          alt="desciption"
          style={{ borderRadius: "10px" }}
        />
        <Typography
          variant="body1"
          sx={{
            margin: "10px 0 20px 0",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          {t("overview-image-description")}
        </Typography>
      </Box>
    </Box>
  );
}

export default Overview;
