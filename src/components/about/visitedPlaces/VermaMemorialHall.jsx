import { Box, Typography } from "@mui/material";
import React from "react";
import vermaHall from "../../../assets/vermaHall.png";

function VermaMemorialHall() {
  
  const style={
    '@media(minWidth: 780px)': {
      backgroundColor: 'red'
    }, 
    '@media(minWidth: 380px)': {
      backgroundColor: 'black'
    }}

  return (
    <Box>
      <Typography variant="h4" sx={{ fontFamily: 'Playfair Display, serif' }}>Ganga Prasad Verma Memorial Hall</Typography>
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
            src={vermaHall}
            alt="description"
            style={{ width: "200px", height: "150px" }}
          />
          <Typography variant="body1" style={{padding: "10px" }}>Foundation information of Ganga Prasad Verma Memorial Hall</Typography>
        </Box>
        <Typography variant="body1">
          On 23rd October 1943, with the help of the members of the Ram Teerth Publication League, 
          250-300 poor and needy people were fed in the Ganga Prasad Verma Memorial Hall, which was 
          close to the Central Hotel. Baba’s identity was hidden and the Mandali took the help of 
          some local allies in the cooking of the food. After the food was prepared, all the people were 
          made to sit inside the Hall and bamboo plates, salt, etc was served to them. All the outsider 
          helpers were asked to leave the Hall and the doors of the Hall were latched from inside. Then, 
          Baba was brought to the Hall from the Hotel room, in secrecy. Initially, some problems arose 
          like the Brahmins refused to eat the food cooked by the people of other castes. But, as soon as 
          Baba entered the Hall, everyone forgot their issues and fixed their gaze on Baba. Baba’s 
          presence was like the rising sun which was eliminating the darkness that the Brahmins had in 
          their hearts. Baba’s presence made the atmosphere lively and joyful. His heart-melting smile 
          erased all the discrimination. This was all happening irrespective of the fact that no one knew 
          Baba’s real identity. Baba had identified Himself as a philanthropic Parsi from Bombay for this 
          poor feeding program. Everyone sat and Meher Baba, Dr. C.D. Deshmukh, Chanji, Eruch, Baidul, 
          and Babadas served food to them.
        <br/>
          After the poor feeding, every person was called to a separate room one by one and was given 
          clothes and one rupee each. Post this, Baba was taken back to His room at the Central Hotel. 
          From there, He went to the railway station the same day to catch a train to Jalandhar.
        </Typography>
      </div>
    </Box>
  );
}

export default VermaMemorialHall;
