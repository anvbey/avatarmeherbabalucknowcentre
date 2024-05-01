import React from "react";
import { Box } from "@mui/material";

import Overview from "../../components/about/Overview";
import Timeline from "../../components/about/Timeline";
import Present from "../../components/about/Present";
import Places from "../../components/about/BabaPlaces"
import SideTab from "../../components/about/SideTab";

const About = () => {
  

  return (
    <Box sx={{ margin: "0 60px 0 60px" }}>
      <SideTab/>
      <Overview/>
      <Timeline/>
      <Present/>
      <Places/>
    </Box>
  );
};

export default About;