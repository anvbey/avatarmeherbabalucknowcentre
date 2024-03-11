import React from "react";
import { Box, Typography } from "@mui/material";
import MeherPrem from "../../assets/MeherPrem.jpg";
import Schedule from "../../components/events/Schedule";
import AboutEvent from "../../components/highlightEvent/AboutEvent";
import Contact from "../../components/highlightEvent/Contact"
const HighlightEvent = () => {
  const imageRef = React.createRef();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      padding={"50px"}
    >
      <img
        ref={imageRef}
        src={MeherPrem}
        alt={"item.title"}
        loading="lazy"
        style={{
          maxWidth: "80%",
          // height: '500px',
          marginTop: "50px",
          borderRadius: '8px'
        }}
      />
      <AboutEvent/>
      <Box>
        <Typography variant="h3">Session-wise Schedule</Typography>
        <Schedule />
      </Box>
      <Contact/>
    </Box>
  );
};

export default HighlightEvent;
