import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import YouTubeEmbed from "./YoutubeVideo";

import "./AboutEvent.css";

function AboutEvent() {

  return (
    <Box
      className="about-meher-prem-container"
      sx={{
        display: "flex",
        margin: "0 40px",
        maxWidth: "90%",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&display=swap"
      />
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Playfair Display SC, serif",
        }}
      >
        About Meher Prem Sammelan
      </Typography>
      <Box
        className="about-meher-prem"
        sx={{
          flex: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="meher-prem-content-container"
          sx={{
            flex: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            Join us as we celebrate 100 years since Meher Baba's momentous visit
            to Lucknow with a special two-day Meher Prem Sammelan. Themed
            "Exploring Practicality in Spirituality," this event promises a
            profound journey of love and learning. Our program will feature
            soul-stirring songs, mesmerizing ghazals, uplifting qawwalis, and
            inspiring talks by esteemed Meher Baba lovers from around the globe.
            It's not just an event; it's an opportunity to connect with fellow
            devotees, deepen our understanding of spirituality, and renew our
            commitment to Meher Baba's message of love and truth. RSVP now to
            secure your spot and join us in celebrating Meher Baba's profound
            legacy and the enduring power of his love.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            Date: 22nd & 23rd October 2024
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: "bold",
            }}
          >
            Venue: Ravindralaya Auditorium, Charabagh, Lucknow (
            <a
              href="https://maps.app.goo.gl/gQsxDw1uAKvFPicR7"
              target="_blank"
              style={{
                fontWeight: "bold",
              }}
            >
              Location
            </a>
            )
          </Typography>
          <Link to="/oct2024/register">
            <Button
              variant="contained"
              sx={{ width: "100px", marginTop: "10px" }}
            >
              Register!
            </Button>
          </Link>
        </Box>
        <Box sx={{ flex: 5, margin: "10px" }}>
          <YouTubeEmbed />
        </Box>
      </Box>
    </Box>
  );
}

export default AboutEvent;
