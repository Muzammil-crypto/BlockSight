import React from "react";
import ReactPlayer from "react-player";

export const VideoCard = () => {
  const URL =
    "https://www.youtube.com/watch?v=5jpgMXt1Z9Y&ab_channel=edureka%21";
  return (
    <div>
      <div style={{ marginTop: 40 }}>
        <ReactPlayer url={URL} />
      </div>
    </div>
  );
};
