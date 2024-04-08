import React from "react";
import { Box, Typography } from "@mui/material";

import MeherPrem from "../../assets/MeherPrem.jpg";

function AboutCentre() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontFamily: "Playfair Display, serif" }}>
        HISTORY OF AVATAR MEHER BABA CENTRE, LUCKNOW
      </Typography>
      <Box sx={{ display: "block" }}>
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
          The Avatar Meher Baba Centre, Lucknow was established in the year 1975
          at the residence of Shri. S.S. Dubey and Smt. Shakuntala Dubey, in the
          presence of Shri. P.D. Pukar, Shri. G.D. Panchal, Shri. M.D. Shastri,
          and Shri. S.R. Sharma. Shri. S.S. Dubey was the veteran Baba lover who
          brought Beloved Baba’s name to Lucknow. By this time, Shri. S.S. Dubey
          had considerably spread Meher Baba’s name and love among his family,
          friends, colleagues, and neighbours, which resulted in a number of
          people coming into Baba’s love net. Gradually, satsang programs
          started being held every month at the residences of Shri. G.P. Dubey
          and Smt. Bindu Dubey, Shri. K.K. Sharma, Shri. Ram Prasad, and Shri.
          J.K. Verma. With time, Smt. Mithilesh Srivastava, a colleague of Shri.
          S.S. Dubey, and her husband, Shri. K.K. Srivastava also became ardent
          Baba lovers. To commemorate Baba's poor feeding program in Lucknow and
          to celebrate its ‘Golden Jubilee’, the AMBC, Lucknow was inaugurated
          on 23rd October 1993 by Dr. H.P. Bharucha, from Navsari at the
          residence of Shri. K.K. Srivastava and Smt. Mithilesh Srivastava at
          169, Samar Vihar Colony, Lucknow. Since then, every year, the
          celebration of Meher Baba’s birthday, which was earlier celebrated at
          the centre at Charbagh, shifted to this Centre at Samar Vihar Colony
          which is followed even today. Apart from this, satsang programs are
          held at the Centre on the first Sunday of every month and the 23rd of
          every month, along with bi-annual celebrations remembering Baba’s
          visits to Lucknow on the 16th of May and the 23rd of October. The
          celebration of Baba’s May visit of the year 1924 to Lucknow was first
          held on 15th – 16th May 1986 at the residence of Shri. K.K. Sharma.
          Since then, satsang programs are organized every year at the residence
          of Shri. K.K. Sharma on 15th May, at the AMB Centre on 16th May, and
          at Lord Meher School, founded by Shri. K.D. Nigam in the Indiranagar
          area of Lucknow at 17th May. The foundation stone of the Lord Meher
          School, Indiranagar was laid by Shri. Ali Akbar Shahpurzaman ‘Aloba’
          on 28th November 1996 and the first session of the High School was
          inaugurated by the then Chairman of Avatar Meher Baba Perpetual Public
          Charitable Trust, Shri. Bhau Kalchuri on 21st March 2000. A stall was
          set up by AMB Centre, Lucknow in Lucknow Book Fair from 7th – 16th
          April 2017. It had a huge collection of Baba books and people visiting
          the fair were attracted towards the stall and curious to know about
          Baba. To celebrate the Silver Jubilee of the AMBC, Lucknow, a two-day
          event was organized on 22nd -23rd October 2018 at Ganga Prasad Verma
          Memorial Hall, where Baba had held His poor feeding program on 23rd
          October 1943, in which witnessed enthusiastic participation by Baba
          lovers from various locations of the country. The Baba lovers of
          Lucknow remain ever zealous to keep working for Beloved Baba’s cause
          and spread His message of Love and Truth among the masses through many
          more Baba programs and related activities in the times to come.
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutCentre;