import React from "react";

const YouTubeEmbed = ({ videoId }) => {
  const srcUrl =
    "https://www.youtube.com/embed/iRC35uqqXUQ?si=uQKDe6C_-UG_ckoh";

  return (
    <div style={{ borderRadius: "8px", overflow: "hidden" }}>
      <iframe
        width="100%"
        height="315"
        src={`${srcUrl}&autoplay=1&mute=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
