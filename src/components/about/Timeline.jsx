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
        Baba's visit to Lucknow Timeline
      </Typography>
      <Typography variant="body-1" >
        Meher Baba visited Lucknow 7 times during His physical life.
      </Typography>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">March 1924</h3>
          <p>
            Baba was traveling by train from Hyderabad to Nepal via Lucknow. He
            got down the train at the halt to buy sandals outside the railway
            station.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">1940</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Baba changed trains at Lucknow while traveling from Moradabad to
            Bhopal on 19th August 1924
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">1950</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>
            On His travel to various locations of North India, Baba came to
            Lucknow and contacted Masts. During this visit, He first met Nasiban
            Mastani, a mast of the 6th plane.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">1960</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Meher Baba visited Lucknow and contacted more masts. He met ‘Allah
            vala’ mast for the first time. He also met Nasiban Mastani again.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">1970</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
            Baba came to Lucknow on 20th October 1943 from Kolkata. He met
            ‘Allah vala’ mast, Badi Bibi, and Nasiban Mastani. On 23rd October
            1943, He held a poor feeding program at Ganga Prasad Verma Memorial
            Hall where 250-300 poor and needy people of all castes were fed.
            After feeding the people, Baba called each one of them in a separate
            room and gave them clothes and one rupee each. After this program,
            Baba took a train to Jalandhar on the same day.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">1980</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Agile Development Scrum Master
          </h4>
          <p>
            Baba again contacted ‘Allah vala’ mast on 16th May 1946. He also
            contacted Godri vala mast and ‘Mastani jhopdi vali’ mast.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">1990</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>
            Meher Baba, accompanied by His Mandali came to Lucknow from
            Meherastana via Kanpur. He took a train from Lucknow to
            Mahabaleshwar.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
}

export default Timeline;