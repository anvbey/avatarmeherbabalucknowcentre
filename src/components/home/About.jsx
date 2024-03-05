import React, { useRef, useEffect } from "react";
import Netting from "../../assets/BabaMeetingKids.jpg";
import { Typography } from "@mui/material";

function About() {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (imageElement) {
      imageElement.addEventListener("contextmenu", (event) => {
        event.preventDefault(); // Disable default context menu
      });
    }
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "10px",
      }}
    >
      <Typography variant="h1">About</Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <Typography variant="h3">Meher Baba</Typography>
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            borderRadius: "30px",
            margin: "10px",
          }}
        >
        <img
          ref={imageRef}
          src={Netting}
          alt={"item.title"}
          loading="lazy"
          width="700"
          height="700"
          style={{ borderRadius: "50px", padding: "30px" }}
        />
          <Typography variant="h6" style={{ margin: "auto", padding: "20px" }}>
            Meher Baba, the Avatar. “Meher Baba” means “Compassionate Father.”
            It is the name given to Him, their spiritual Master, by a group of
            His disciples in the early 1920s after signs of His spiritual status
            became apparent. Today, many thousands of people from every
            religious tradition regard Meher Baba as the one long awaited — the
            Prophet, the Buddha, the Christ, the Messiah of this age. Most
            commonly in India, He is referred to as the “Avatar,” a Sanskrit
            word meaning “descent of God.”
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <Typography variant="h3">Lucknow Centre</Typography>
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            borderRadius: "30px",
            margin: "10px",
          }}
        >
          <Typography variant="h6" style={{ margin: "auto", padding: "20px" }}>
            Meher Baba, the Avatar. “Meher Baba” means “Compassionate Father.”
            It is the name given to Him, their spiritual Master, by a group of
            His disciples in the early 1920s after signs of His spiritual status
            became apparent. Today, many thousands of people from every
            religious tradition regard Meher Baba as the one long awaited — the
            Prophet, the Buddha, the Christ, the Messiah of this age. Most
            commonly in India, He is referred to as the “Avatar,” a Sanskrit
            word meaning “descent of God.”
          </Typography>
          <img
            ref={imageRef}
            src={Netting}
            alt={"item.title"}
            loading="lazy"
            width="700"
            height="700"
            style={{ borderRadius: "50px", padding: "30px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
