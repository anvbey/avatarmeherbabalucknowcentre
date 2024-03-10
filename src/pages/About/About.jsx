import React from "react";
import { Box} from "@mui/material";
import Overview from "../../components/about/Overview";
import Timeline from "../../components/about/Timeline";
import Present from "../../components/about/Present";
const About = () => {
  

  return (
    <Box sx={{ margin: "60px" }}>
      <Overview/>
      <Timeline/>
    </Box>
  );
};

export default About;
