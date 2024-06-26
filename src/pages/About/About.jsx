import React from "react";
import { Box, Typography } from "@mui/material";

import Overview from "../../components/about/Overview";
import Timeline from "../../components/about/Timeline";
import Present from "../../components/about/Present";
import Places from "../../components/about/BabaPlaces";
import SideTab from "../../components/about/SideTab";
import YouTubeEmbed from "../../components/about/DocumentaryVideo";
import Quotes from "../../components/home/Quotes";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("About");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
      }}
    >
      <SideTab />
      <Overview />
      <Quotes
        quote={t("quote-1")}
        reference={t("quote-1-reference")}
      />
      <Timeline />
      <Quotes
        quote={t("quote-2")}
        reference={t("quote-2-reference")}
      />
      <Present />
      <Quotes
        quote={t("quote-3")}
        reference={t("quote-3-reference")}
      />
      <Places />
      <Box id="documentary" sx={{ margin: "0 60px" }}>
        <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
        {t("documentary-heading")}
        </Typography>
        <Box sx={{ marginTop: "10px" }}>
          <YouTubeEmbed />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
