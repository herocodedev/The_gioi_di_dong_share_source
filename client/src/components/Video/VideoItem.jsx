import React from "react";

function VideoItem(props) {
  const { idVideo, width, height } = props;

  return (
    <div>
      <iframe
        width={width ? width : 400}
        height={height ? height : 315}
        src={`https://www.youtube.com/embed/${idVideo}`}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default VideoItem;
