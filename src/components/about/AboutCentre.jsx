import React from "react";
import { Box, Typography } from "@mui/material";

import amblko from "../../assets/AMBLKO.jpg";

function AboutCentre() {
  return (
    <Box>
      <Box sx={{ display: "block" }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          The Avatar Meher Baba Centre, Lucknow was established in the year 1975
          at the residence of Shri. S.S. Dubey and Smt. Shakuntala Dubey, in the
          presence of Shri. Parmeshwari Dayal Pukar, Shri. Gulab Das Panchal, Shri. Matra Dutt Shastri,
          and Shri. Salig Ram Sharma. Shri. S.S. Dubey was the veteran Baba lover who
          brought Beloved Baba’s name to Lucknow. By this time, Shri. S.S. Dubey
          had considerably spread Meher Baba’s name and love among his family,
          friends, colleagues, and neighbours, which resulted in a number of
          people coming into Baba’s love net. Gradually, satsang programs
          started being held every month at the residences of Shri. G.P. Dubey
          and Smt. Bindu Dubey, Shri. K.K. Sharma, Shri. Ram Prasad, and Shri.
          J.K. Verma.
          <br />
          <br />
          With time, Smt. Mithilesh Srivastava, a colleague of Shri. S.S. Dubey,
          and her husband, Shri. K.K. Srivastava also became ardent Baba lovers.
          To commemorate Baba's poor feeding program in Lucknow and to celebrate
          its ‘Golden Jubilee’, the AMBC, Lucknow was inaugurated on 23rd
          October 1993 by Dr. H.P. Bharucha, from Navsari at the residence of
          Shri. K.K. Srivastava and Smt. Mithilesh Srivastava at 169, Samar
          Vihar Colony, Lucknow. Since then, every year, the celebration of
          Meher Baba’s birthday, which was earlier celebrated at the centre at
          Charbagh, shifted to this Centre at Samar Vihar Colony which is
          followed even today. Apart from this, satsang programs are held at the
          Centre on the first Sunday of every month and the 23rd of every month,
          along with bi-annual celebrations remembering Baba’s visits to Lucknow
          on the 16th of May and the 23rd of October. <br />
          <br />
          The celebration of Baba’s May visit of the year 1924 to Lucknow was
          first held on 15th – 16th May 1986 at the residence of Shri. K.K.
          Sharma. Since then, satsang programs are organized every year at the
          residence of Shri. K.K. Sharma on 15th May, and at the AMB Centre on
          16th May.
          <br />
          <br />
          The Lord Meher School in the Indiranagar area of Lucknow was founded by
          Shri. K.D. Nigam. The foundation stone of the Lord Meher School,
          Indiranagar was laid by Shri. Ali Akbar Shahpurzaman ‘Aloba’ on 28th
          November 1996 and the first session of the High School was inaugurated
          by the then Chairman of Avatar Meher Baba Perpetual Public Charitable
          Trust, Shri. Bhau Kalchuri on 21st March 2000. <br />
          <br />
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
        The Centre in recent times:
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
            src={amblko}
            alt="description"
            style={{ maxWidth: "70%", height: "auto", borderRadius: "10px" }} // Modified style here
          />
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
              padding: "10px",
            }}
          >
            Meher Baba's Birthday Celebration at Centre
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Multiple events have been organised by AMB Centre, Lucknow under the
          able guidance of our President Mr. K.K. Sharma and our 
          Secretary Mr. Sanjay Dubey.
          <br />
          <br />
          A stall was set up by AMB Centre, Lucknow in Lucknow Book Fair from
          7th – 16th April 2017. It had a huge collection of Baba books and
          people visiting the fair were attracted towards the stall and curious
          to know about Baba.
          <br />
          <br />
          To celebrate the Silver Jubilee of the AMBC, Lucknow, a two-day event
          was organized on 22nd - 23rd October 2018 at Ganga Prasad Verma
          Memorial Hall, where Baba had held His poor feeding program on 23rd
          October 1943, which witnessed enthusiastic participation by Baba
          lovers from various locations of the country.
          <br />
          <br />
          The centre also holds art workshops for the Baba Lovers in Lucknow,
          both, virtually and physically. Regular satsangs are held at the AMB
          Centre, Lucknow on the first Sunday and 23rd day, each of every month
          from 6 PM to 8 PM for the Baba lovers to gather and sing in His praise
          and learn His teachings through talks. The centre organises feeding
          program at a nearby Ashram for lepers, blanket donation drives, etc.
          The Centre also maintains a library with Baba books for the Baba
          lovers and visitors in the Centre.
          <br />
          <br />
          The Baba lovers of Lucknow remain ever zealous to keep working for
          Beloved Baba’s cause and spread His message of Love and Truth among
          the masses through many more Baba programs and related activities in
          the times to come.
          <br />
          <br />
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutCentre;
