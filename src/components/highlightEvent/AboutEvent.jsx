import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import YouTubeEmbed from "./YoutubeVideo";

import "./AboutEvent.css";

function AboutEvent() {
  return (
    <Box
      className="about-meher-prem-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: "0 40px",
        maxWidth: "90%",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&display=swap"
      />
      <p
        className="about-meher-baba-heading"
        style={{ fontFamily: "Playfair Display SC, serif" }}
      >
        About Meher Prem Sammelan
      </p>
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
            marginRight: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
        <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
          <p className="meher-prem-content" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Join us as we celebrate 100 years since Meher Baba's momentous visit to Lucknow 
          with a special two-day Meher Prem Sammelan. Themed "Exploring Practicality 
          in Spirituality," this event promises a profound journey of love and learning. 
          Our program will feature soul-stirring songs, mesmerizing ghazals, uplifting 
          qawwalis, and inspiring talks by esteemed Meher Baba lovers from around the globe. 
          It's not just an event; it's an opportunity to connect with fellow devotees, deepen 
          our understanding of spirituality, and renew our commitment to Meher Baba's message of love and truth. 
          RSVP now to secure your spot and join us in celebrating Meher Baba's profound 
          legacy and the enduring power of his love.
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>Dates:</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>22nd & 23rd October 2024</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>Location</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif' }}>Ravindralaya Auditorium, Charabagh, Lucknow</p>
          <Link to="/oct2024/register" style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ width: '100px', marginTop: '10px' }}>
              Register!
            </Button>
          </Link>
        </Box>
        <Box sx={{ flex: 5, justifyContent: "flex-end" }}>
          <YouTubeEmbed />
        </Box>
      </Box>
    </Box>
  );
}

export default AboutEvent;