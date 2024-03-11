import { Box, Button, Typography } from "@mui/material";
import React from "react";
import YouTubeEmbed from "./YoutubeVideo";
function AboutEvent() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "600px",
          alignItems: "start",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "left" }}>
          About Meher Prem Sammelan
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "left" }}>
          Jashn-e-Rekhta, a vibrant three-day festival, reverently celebrates
          the multifaceted beauty of Urdu across diverse art forms. It's a
          dedicated platform for nurturing and showcasing the rich tapestry of
          language, literature, and culture. Explore the cultural heritage
          through Ghazals, Poetry Symposiums, Qawwali, Sufi melodies, and myriad
          exquisite experiences.
        </Typography>
        <Button
          variant="contained"
          href="#contained-buttons"
          sx={{ width: "100px", marginTop: "10px" }}
        >
          Register!
        </Button>
      </Box>
      <YouTubeEmbed />
    </Box>
  );
}

export default AboutEvent;
