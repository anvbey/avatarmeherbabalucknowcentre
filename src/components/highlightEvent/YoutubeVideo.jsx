import React from "react";

const YouTubeEmbed = ({ videoId }) => {
  const srcUrl = `https://www.youtube.com/embed/rMN2PgNo7aw`;

  return (
    <div style={{ borderRadius: "8px", overflow: "hidden" }}>
      <iframe
        width="100%"
        height="315"
        src={srcUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; 
    autoplay; 
    clipboard-write; 
    encrypted-media; 
    gyroscope; 
    picture-in-picture; 
    web-share"
    allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
