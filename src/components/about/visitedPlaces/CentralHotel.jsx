import { Box, Typography } from "@mui/material";
import React from "react";
import central from "../../../assets/central.jpg";

function CentralHotel() {
  
  const style={
    '@media(minWidth: 780px)': {
      backgroundColor: 'red'
    }, 
    '@media(minWidth: 380px)': {
      backgroundColor: 'black'
    }}

  return (
    <Box>
      <Typography variant="h4" sx={{ fontFamily: 'Playfair Display, serif' }}>Central Hotel, Aminabad</Typography>
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
            src={central}
            alt="description"
            style={{ width: "200px", height: "150px" }}
          />
          <Typography variant="body1">Central Hotel, Aminabad</Typography>
        </Box>
        <Typography variant="body1">
          In September 1943, there was news that Kolkata, Lucknow, and many other places in India 
          were hit by a famine. On 1st October 1943, Baba expressed His wish to visit Kolkata and when 
          He reached there, He served food to people Himself.
          <br/>
          In Baba’s words, “This work of mine is quite distinct from that done by others. 
          For spiritual reasons, I want to serve the food myself. There are hundreds of institutions 
          engaged in the work of handing out free food, but I do not wish to work through them. The meaning of 
          my feeding people is quite different. It is not to fill the stomachs of the hungry, but to feed humanity spiritually.”
          <br/>
          When Baba was in Kolkata, He sent Chanji and Adi Sr. to Lucknow to make arrangements to 
          feed poor people there. Baba reached Lucknow on 20th October 1943. Wednesday at 9:00 pm and stayed at the Central Hotel.
        </Typography>
      </div>
    </Box>
  );
}

export default CentralHotel;
