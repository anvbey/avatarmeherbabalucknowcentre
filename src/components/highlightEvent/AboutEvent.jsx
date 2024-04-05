import { Box, Button, Typography } from "@mui/material";
import React from "react";
import YouTubeEmbed from "./YoutubeVideo";
import "./AboutEvent.css";

function AboutEvent() {
  return (
    <Box className="about-meher-prem-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: "0 40px",
        maxWidth: "90%",
      }}
    >
      <p className="meher-prem-heading">About Meher Prem Sammelan</p>
      <Box className="about-meher-prem"
        sx={{
          flex: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          
          sx={{
            flex: 5,
            marginRight: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <p className="meher-prem-content">
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
            href="#contained-buttons"
            sx={{ width: "100px", marginTop: "10px" }}
          >
            Register!
          </Button>
        </Box>
        <Box sx={{ flex: 5, alignContent: "flex-end" }}>
          <YouTubeEmbed />
        </Box>
      </Box>
    </Box>
  );
}

export default AboutEvent;
