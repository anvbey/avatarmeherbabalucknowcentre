import { Box, Button, Typography } from "@mui/material";
import React from "react";
import YouTubeEmbed from "./YoutubeVideo";
function AboutEvent() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        margin: "40px 0",
      }}
    >
      <Box
        sx={{
          flex: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "left" }}>
          About Meher Prem Sammelan
        </Typography>
        <Box
          sx={{
            marginRight: "50px",
          }}
        >
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            Meher Prem Sammelan, a vibrant two-day festival, reverently
            celebrates 100 years of Baba's visit to Lucknow. Here we showcase
            the rich tapestry of language, literature, and culture. Explore the
            cultural heritage through Ghazals, Poetry Symposiums, Qawwali, Sufi
            melodies, Plays, Movies and myriad exquisite experiences. Meher Prem
            Sammelan, a vibrant two-day festival, reverently celebrates 100
            years of Baba's visit to Lucknow. Meher Prem Sammelan, a vibrant
            two-day festival, reverently celebrates 100 years of Baba's visit to
            Lucknow.
          </Typography>
          <Button
            variant="contained"
            href="#contained-buttons"
            sx={{ width: "100px", marginTop: "10px" }}
          >
            Register!
          </Button>
        </Box>
      </Box>
      <Box sx={{ flex: 5 }}>
        <YouTubeEmbed />
      </Box>
    </Box>
  );
}

export default AboutEvent;
