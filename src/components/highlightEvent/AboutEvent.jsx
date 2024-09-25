import React from "react";
import { Box, Typography } from "@mui/material";
import YouTubeEmbed from "./YoutubeVideo";
import "./AboutEvent.css";
import { useTranslation } from "react-i18next";

function AboutEvent() {
  const { t } = useTranslation("HEvent");

  return (
    <Box
      className="about-meher-prem-container"
      sx={{
        display: "flex",
        margin: "0 40px",
        maxWidth: "90%",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&display=swap"
      />
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Playfair Display SC, serif",
        }}
      >
        {t("meher-prem-sammelan-heading")}
      </Typography>
      <Box
        className="about-meher-prem"
        sx={{
          flex: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="meher-prem-content-container"
          sx={{
            flex: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
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
            {t("meher-prem-sammelan-description")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            {t("date")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: "bold",
            }}
          >
            {t("venue")} (
            <a
              href="https://maps.app.goo.gl/gQsxDw1uAKvFPicR7"
              target="_blank"
              rel="noreferrer"
              style={{
                fontWeight: "bold",
              }}
            >
              {t("location")}
            </a>
            )
          </Typography>
          {/* <Link to="/oct2024/register">
            <Button
              variant="contained"
              sx={{ marginTop: "10px", fontWeight: "bold" }}
            >
              {t("register-button")}
            </Button>
          </Link> */}
        </Box>
        <Box sx={{ flex: 5, margin: "10px" }}>
          <YouTubeEmbed />
        </Box>
      </Box>
    </Box>
  );
}

export default AboutEvent;
