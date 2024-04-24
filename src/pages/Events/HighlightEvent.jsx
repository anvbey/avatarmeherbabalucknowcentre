import React from "react";
import { Box } from "@mui/material";

import Quotes from "../../components/home/Quotes";
import AboutEvent from "../../components/highlightEvent/AboutEvent";
import Contact from "../../components/highlightEvent/Contact";

import MeherPrem from "../../assets/Oct2024Banner.png";

import "./HighlightEvent.css";

const HighlightEvent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100vw"
    >
      <img
        className="highlight-image"
        src={MeherPrem}
        alt={"item.title"}
        loading="lazy"
      />
      <Quotes
        quote={
          "If you do obey Me one hundred percent with all sincerity, at any cost, it will be greater than loving Me."
        }
        reference={"Meher Baba Calling"}
      />
      <AboutEvent />
      <Quotes quote={
        "I have only one Message to give; and I repeat it age after age to one and all: LOVE GOD."
      }
      reference={"Meher Baba Calling"}/>
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
