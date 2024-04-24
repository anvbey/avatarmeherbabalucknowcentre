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
    <Box
      id="lucknow"
      sx={{
        margin: "20px 0",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontFamily: "Playfair Display SC, serif" }}
      >
        Chronology of Meher Baba’s Lucknow Visits
      </Typography>
      <Typography
        variant="body-1"
        sx={{
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        Meher Baba visited Lucknow 7 times during His physical life.
      </Typography>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "10px solid  rgb(59, 48, 26)" }}
          iconStyle={{ background: "rgb(85, 191, 255)", color: "#fff" }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
            className="vertical-timeline-element-title"
          >
            March 1924
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            Baba was traveling by train from Hyderabad to Nepal via Lucknow. He
            got down the train at the halt to buy sandals outside the railway
            station.
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "10px solid  rgb(59, 48, 26)" }}
          iconStyle={{ background: "rgb(196, 88, 254)", color: "#fff" }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
            className="vertical-timeline-element-title"
          >
            August 1924
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            Baba changed trains at Lucknow while traveling from Moradabad to
            Bhopal on 19th August 1924
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "10px solid  rgb(59, 48, 26)" }}
          iconStyle={{ background: "rgb(49, 89, 255)", color: "#fff" }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif", fontWeight: "bold"
            }}
          >
            February 1941
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            On His travel to various locations of North India, Baba came to
            Lucknow and contacted Masts. During this visit, He first met Nasiban
            Mastani, a mast of the 6th plane.
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "10px solid  rgb(59, 48, 26)" }}
          iconStyle={{ background: "rgb(7, 204, 0)", color: "#fff" }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
            className="vertical-timeline-element-title"
          >
            March 1942
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            Meher Baba visited Lucknow and contacted more masts. He met ‘Allah
            vala’ mast for the first time. He also met Nasiban Mastani again.
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "10px solid  rgb(59, 48, 26)" }}
          iconStyle={{ background: "rgb(254, 255, 51)", color: "#fff" }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
            className="vertical-timeline-element-title"
          >
            October 1943
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            Baba came to Lucknow on 20th October 1943 from Kolkata. He met
            ‘Allah vala’ mast, Badi Bibi, and Nasiban Mastani. On 23rd October
            1943, He held a poor feeding program at Ganga Prasad Verma Memorial
            Hall where 250-300 poor and needy people of all castes were fed.
            After feeding the people, Baba called each one of them in a separate
            room and gave them clothes and one rupee each. After this program,
            Baba took a train to Jalandhar on the same day.
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "10px solid  rgb(59, 48, 26)" }}
          iconStyle={{ background: "rgb(254, 154, 51)", color: "#fff" }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
            className="vertical-timeline-element-title"
          >
            May 1946
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            Baba again contacted ‘Allah vala’ mast on 16th May 1946. He also
            contacted Godri vala mast and ‘Mastani jhopdi vali’ mast.
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "10px solid  rgb(59, 48, 26)" }}
          iconStyle={{ background: "rgb(254, 2, 0)", color: "#fff" }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
            className="vertical-timeline-element-title"
          >
            February 1954
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            Meher Baba, accompanied by His Mandali came to Lucknow from
            Meherastana via Kanpur. He took a train from Lucknow to
            Mahabaleshwar.
          </Typography>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
}

export default Timeline;
