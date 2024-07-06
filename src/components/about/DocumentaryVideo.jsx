import React from "react";

const YouTubeEmbed = ({ videoId }) => {
  const srcUrl = `https://www.youtube.com/embed/DA5vLefXfe0?si=_0QMbMYvzKV3sqO1`;

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src={srcUrl}
        title="Exploring Lucknow's Meher Baba Connection: Sacred Sites (Documentary)"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0 }}
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
