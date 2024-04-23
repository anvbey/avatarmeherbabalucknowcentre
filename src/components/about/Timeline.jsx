import React from "react";
import { Box, Typography } from "@mui/material";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./Timeline.css";

function Timeline() {
  return (
    <Box id="lucknow"
      sx={{
        margin: "20px 0",
      }}
    >
      <Typography variant="h3" sx={{ fontFamily: 'Playfair Display SC, serif' }}>
      Chronology of Meher Baba’s Lucknow Visits
      </Typography>
      <Typography variant="body-1" >
        Meher Baba visited Lucknow 7 times during His physical life.
      </Typography>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          
          contentArrowStyle={{ borderRight: "10px solid  rgb(59, 48, 26)" }}
          date="March 1924"
          iconStyle={{ background: "rgb(85, 191, 255)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">March 1924</h3>
          <p>
          Baba was traveling by train from Hyderabad to Nepal via Lucknow. 
          He got down the train at the halt to buy sandals outside the railway station.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 1924"
          contentArrowStyle={{ borderRight: "10px solid  rgb(59, 48, 26)" }}
          iconStyle={{ background: "rgb(196, 88, 254)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">August 1924</h3>
          <p>
            Baba changed trains at Lucknow while traveling from Moradabad to
            Bhopal on 19th August 1924
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 1941"
          contentArrowStyle={{ borderRight: "10px solid  rgb(59, 48, 26)" }}
          iconStyle={{ background: "rgb(49, 89, 255)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">February 1941</h3>
          <p>
          On His travel to various locations of North India, 
          Baba came to Lucknow and contacted Masts. During this visit, 
          He first met Nasiban Mastani, a mast of the 6th plane.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 1942"
          contentArrowStyle={{ borderRight: "10px solid  rgb(59, 48, 26)" }}
          iconStyle={{ background: "rgb(7, 204, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">March 1942</h3>
          <p>
          Meher Baba visited Lucknow and contacted more masts. He met ‘Allah vala’ mast for the first time. 
          He also met Nasiban Mastani again.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="October 1943"
          contentArrowStyle={{ borderRight: "10px solid  rgb(59, 48, 26)" }}
          iconStyle={{ background: "rgb(254, 255, 51)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">October 1943</h3>
          <p>
          Baba came to Lucknow on 20th October 1943 from Kolkata. He met ‘Allah vala’ mast, Badi Bibi, and Nasiban Mastani. 
          On 23rd October 1943, He held a poor feeding program at 
          Ganga Prasad Verma Memorial Hall where 250-300 poor and needy people of all castes were fed. After feeding the people, 
          Baba called each one of them in a separate room and gave them clothes and one rupee each. 
          After this program, Baba took a train to Jalandhar on the same day.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 1946"
          contentArrowStyle={{ borderRight: "10px solid  rgb(59, 48, 26)" }}
          iconStyle={{ background: "rgb(254, 154, 51)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">May 1946</h3>          
          <p>
          Baba again contacted ‘Allah vala’ mast on 16th May 1946. He also contacted Godri vala mast and ‘Mastani jhopdi vali’ mast.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February 1954"
          contentArrowStyle={{ borderRight: "10px solid  rgb(59, 48, 26)" }}
          iconStyle={{ background: "rgb(254, 2, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">February 1954</h3>          
          <p>
          Meher Baba, accompanied by His Mandali came to Lucknow from Meherastana via Kanpur. He took a train from Lucknow to Mahabaleshwar. 
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
}

export default Timeline;