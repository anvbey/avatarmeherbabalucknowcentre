import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import Netting from "../../assets/LucknowCentre.jpeg";
import "./AboutLucknowCentre.css";
import { useTranslation } from "react-i18next";

function AboutMeherBaba() {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (imageElement) {
      imageElement.addEventListener("contextmenu", (event) => {
        event.preventDefault();
      });
    }
  }, []);
  const { t } = useTranslation("Home");

  return (
    <Box
      className="about-meher-baba-container"
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&display=swap"
      />
      <Typography
        className="about-meher-baba-title"
        variant="h4"
        sx={{
          fontFamily: "Playfair Display SC, serif",
        }}
      >
        {t("lucknow-centre")}
      </Typography>

      <Box
        className="about-meher-baba"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          {t("lucknow-centre-description")}
        </Typography>

        <img
          className="meher-baba-image"
          ref={imageRef}
          src={Netting}
          alt={"item.title"}
          loading="lazy"
          style={{ borderRadius: "10px" }}
        />
      </Box>
    </Box>
  );
}

export default AboutMeherBaba;
