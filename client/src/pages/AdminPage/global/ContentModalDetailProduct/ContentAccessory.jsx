import React from "react";
import VideoItem from "../../../../components/Video/VideoItem";
import CommonContent from "./General/CommonContent";
import ContentItem from "./General/ContentItem";

function ContentAccessory(props) {
  const { data } = props;

  return (
    <div>
      <CommonContent data={data} />
      <div className="type">
        <h1 className="font-semibold my-4 text-xl">Loại sản phẩm</h1>
        <div className="flex flex-wrap gap-2">
          <ContentItem data={data} keyData={"type"} />
        </div>
      </div>
      <div className="type">
        <h1 className="font-semibold my-4 text-xl">Video Demo</h1>
        <div className="flex flex-wrap gap-2">
          <VideoItem idVideo={data.idVideo} />
        </div>
      </div>
    </div>
  );
}

export default ContentAccessory;
