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
    >
      <img
        ref={imageRef}
        src={MeherPrem}
        alt={"item.title"}
        loading="lazy"
        style={{
          marginTop: "80px",
          borderRadius: "8px",
          width: "90%",
          maxHeight: "90vh"
        }}
      />
      <AboutEvent />
      {/*<Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "90%",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h3">Session-wise Schedule</Typography>
        <Schedule />
      </Box>*/}
      <Contact /> 
    </Box>
  );
};

export default HighlightEvent;
