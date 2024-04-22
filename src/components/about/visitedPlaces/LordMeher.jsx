import { Box, Typography } from "@mui/material";
import React from "react";
import lordMeher from "../../../assets/lordMeher.png";

function LordMeher() {
  
  const style={
    '@media(minWidth: 780px)': {
      backgroundColor: 'red'
    }, 
    '@media(minWidth: 380px)': {
      backgroundColor: 'black'
    }}

  return (
    <Box>
      <Typography variant="h4" sx={{ fontFamily: 'Playfair Display, serif' }}>Lord Meher College</Typography>
      <div style={style}>
        
        <Typography variant="body1">
          The foundation stone of the school established by Shri K.D. Nigam ji was 
          laid by Shri. Ali Akbar Shahpurzaman “Aloba” on 28th November 1996. The 
          first session of the High School was inaugurated by Shri. V.S. Kalchuri “Bhau” 
          on 21st March 2000. Apart from Bhau ji, Smt. Dolly Dastur, Shri. Jal Dastur, 
          Shri. Krishna ji, Shri. Shridhar Kelkar, Shri. Mehernath Kalchuri, and Shri. Zhilpilvar 
          ji also joined the program. The school is still running and it holds its annual Baba 
          satsang program on 24th October every year.
        </Typography>
        <Box
          sx={{
            float: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <img
            src={lordMeher}
            alt="description"
            style={{ width: "200px", height: "150px" }}
          />
          <Typography variant="body1">Lord Meher School</Typography>
        </Box>
      </div>
    </Box>
  );
}

export default LordMeher;
