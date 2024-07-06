import React from "react";
import { Box, Typography } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import { useTranslation } from "react-i18next";

function Timeline() {
  const { t } = useTranslation("About");
  return (
    <Box
      id="lucknow"
      sx={{
        margin: "20px 60px 0 60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontFamily: "Playfair Display SC, serif" }}
      >
        {t("timeline-heading")}
      </Typography>
      <Typography
        variant="body-1"
        sx={{
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        {t("timeline-description")}
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
            {t("timeline-card-1-date")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            {t("timeline-card-1-description")}
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
            {t("timeline-card-2-date")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            {t("timeline-card-2-description")}
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
              fontFamily: "DM Sans, sans-serif",
              fontWeight: "bold",
            }}
          >
            {t("timeline-card-3-date")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            {t("timeline-card-3-description")}
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
            {t("timeline-card-4-date")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            {t("timeline-card-4-description")}
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
            {t("timeline-card-5-date")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            {t("timeline-card-5-description")}
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
            {t("timeline-card-6-date")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            {t("timeline-card-6-description")}
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
            {t("timeline-card-7-date")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            {t("timeline-card-7-description")}
          </Typography>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
}

export default Timeline;
