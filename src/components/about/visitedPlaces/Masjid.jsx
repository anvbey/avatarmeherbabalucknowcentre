import { Box, Typography } from "@mui/material";
import React from "react";
import MeherPrem from "../../../assets/MeherPrem.jpg";

function Charbagh() {
  
  const style={
    '@media(minWidth: 780px)': {
      backgroundColor: 'red'
    }, 
    '@media(minWidth: 380px)': {
      backgroundColor: 'black'
    }}

  return (
    <Box>
      <Typography variant="h4" sx={{ fontFamily: 'Playfair Display, serif' }}>Charbagh Railway Station</Typography>
      <div style={style}>
        <Box
          sx={{
            float: "right",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <img
            src={MeherPrem}
            alt="Image description"
            style={{ width: "200px", height: "150px" }}
          />
          <Typography variant="body1">Picture from the centre</Typography>
        </Box>
        <Typography variant="body1">
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
      </div>
    </Box>
  );
}

export default Charbagh;
