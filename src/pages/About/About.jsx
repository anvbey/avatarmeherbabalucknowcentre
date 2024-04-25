import React from "react";
import { Box, Typography } from "@mui/material";

import Overview from "../../components/about/Overview";
import Timeline from "../../components/about/Timeline";
import Present from "../../components/about/Present";
import Places from "../../components/about/BabaPlaces";
import SideTab from "../../components/about/SideTab";
import YouTubeEmbed from "../../components/about/DocumentaryVideo";
import Quotes from "../../components/home/Quotes";

const About = () => {
  return (
    <Box 
      sx={{ 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
      }}>
      <SideTab />
      <Overview />
      <Quotes quote={"Do Your Best, Then Don't Worry, Be Happy! I Will Help You."} reference={"Lord Meher Online Edition, Pg. 5414"}/>
      <Timeline />
      <Quotes quote={"If you have the peace of a frozen lake, you will realize Me."} reference={"Meher Baba Calling, Pg. 3"}/>
      <Present />
      <Quotes quote={"Everything else may fail—Love never fails."} reference={"Avatar, Pg. 169"}/>
      <Places />
      <Box id="documentary" sx={{ margin: "0 60px" }}>
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
        Documentary on the above-mentioned places -
      </Typography>
        <Box sx={{ marginTop: "10px" }}>
        <YouTubeEmbed />
      </Box>
    </Box>
    </Box>
  );
};

export default About;
