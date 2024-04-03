import React from "react";
import { Box, Typography } from "@mui/material";
import MeherPrem from "../../assets/MeherPrem.jpg";
import Schedule from "../../components/events/Schedule";
import AboutEvent from "../../components/highlightEvent/AboutEvent";
import Contact from "../../components/highlightEvent/Contact";
const HighlightEvent = () => {
  const imageRef = React.createRef();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      minHeight="100vh"
      margin=" 0 40px"
    >
      <img
        ref={imageRef}
        src={MeherPrem}
        alt={"item.title"}
        loading="lazy"
        style={{
          maxWidth: "80%",
          maxHeight: "100vh",
          marginTop: "80px",
          borderRadius: "8px",
        }}
      />
      <AboutEvent />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h3">Session-wise Schedule</Typography>
        <Schedule />
      </Box>
      <Contact />
    </Box>
  );
};

export default HighlightEvent;
