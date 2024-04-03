import React from "react";

const YouTubeEmbed = ({ videoId }) => {
  const srcUrl = `https://www.youtube.com/embed/91IRuRRKQuk`;

  return (
    <div style={{ borderRadius: "8px", overflow: "hidden" }}>
      <iframe
        width="100%"
        height="315"
        src={srcUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; 
    autoplay; 
    clipboard-write; 
    encrypted-media; 
    gyroscope; 
    picture-in-picture; 
    web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
