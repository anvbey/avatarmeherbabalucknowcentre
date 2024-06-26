import React from "react";
import { Box } from "@mui/material";

import Quotes from "../../components/home/Quotes";
import AboutEvent from "../../components/highlightEvent/AboutEvent";
import Contact from "../../components/highlightEvent/Contact";

import MeherPrem from "../../assets/Oct2024Banner.png";

import "./HighlightEvent.css";
import { useTranslation } from "react-i18next";

const HighlightEvent = () => {
  const { t } = useTranslation("HEvent");
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100vw"
    >
      <img
        className="highlight-image"
        src={MeherPrem}
        alt={"item.title"}
        loading="lazy"
      />
      <Quotes
        quote={t("quote-1")}
        reference={t("quote-1-reference")}
      />
      <AboutEvent />
      <Quotes
        quote={t("quote-2")}
        reference={t("quote-2-reference")}
      />
      {/*<Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "90%",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h3">Session-wise Schedule</Typography>
        <Schedule />
      </Box>*/}
      <Contact />
    </Box>
  );
};

export default HighlightEvent;
