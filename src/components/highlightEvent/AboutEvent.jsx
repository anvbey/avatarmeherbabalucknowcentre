import React from "react";
import { Box, Button } from "@mui/material";

import YouTubeEmbed from "./YoutubeVideo";

import "./AboutEvent.css";

function AboutEvent() {
  return (
    <Box
      className="about-meher-prem-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: "0 40px",
        maxWidth: "90%",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&display=swap"
      />
      <p
        className="about-meher-baba-heading"
        style={{ fontFamily: "Playfair Display SC, serif" }}
      >
        About Meher Prem Sammelan
      </p>
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
            marginRight: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
        <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
          <p className="meher-prem-content" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Meher Prem Sammelan, a vibrant two-day festival, reverently
            celebrates 100 years of Baba's visit to Lucknow. Here we showcase
            the rich tapestry of language, literature, and culture. Explore the
            cultural heritage through Ghazals, Poetry Symposiums, Qawwali, Sufi
            melodies, Plays, Movies and myriad exquisite experiences. Meher Prem
            Sammelan, a vibrant two-day festival, reverently celebrates 100
            years of Baba's visit to Lucknow. Meher Prem Sammelan, a vibrant
            two-day festival, reverently celebrates 100 years of Baba's visit to
            Lucknow.
          </p>
          <Button
            variant="contained"
            href="/oct2024/register"
            sx={{ width: "100px", marginTop: "10px" }}
          >
            Register!
          </Button>
        </Box>
        <Box sx={{ flex: 5, justifyContent: "flex-end" }}>
          <YouTubeEmbed />
        </Box>
      </Box>
    </Box>
  );
}

export default AboutEvent;