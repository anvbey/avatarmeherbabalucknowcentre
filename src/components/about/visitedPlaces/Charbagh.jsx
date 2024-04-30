import { Box, Typography } from "@mui/material";
import React from "react";
import image from "../../../assets/charbagh.png";

function Charbagh() {
  
  return (
    <Box sx={{
      margin: "20px 0"
    }}>
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
        Charbagh Railway Station
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img
            src={image}
            alt="description"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px"}}
          />
          <Typography variant="body1" style={{ margin: "10px" }}>
            Charbagh Railway Station
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Meher Baba visited Lucknow 7 times during His physical life. He came
          to Lucknow from various locations across different times by train and
          hence, visited the Charbagh Railway station. Sometimes, He visited the
          Charbagh Railway Station only to catch His connecting trains. When He
          came to Lucknow for the first time in March 1924, He got down the
          train traveling from Hyderabad to Nepal via Lucknow at the halt to buy
          sandals outside the railway station. On 19th August 1924, Baba changed
          trains at Lucknow while traveling from Moradabad to Bhopal. In
          February 1954, He came to Lucknow from Meherastana via Kanpur and
          caught a train from Lucknow to Mahabaleshwar.
        </Typography>
      </Box>
    </Box>
  );
}

export default Charbagh;
