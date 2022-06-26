import React from "react";
import VideoItem from "../../../../components/Video/VideoItem";
import CommonContent from "./General/CommonContent";
import ContentItem from "./General/ContentItem";

function ContentLaptop(props) {
  const { data } = props;
  return (
    <div>
      <CommonContent data={data} />
      <div className="brand">
        <h1 className="font-semibold my-4 text-xl">Nhãn hiệu</h1>
        <ContentItem data={data} keyData={"brand"} />
      </div>
      <div className="type">
        <h1 className="font-semibold my-4 text-xl">Loại sản phẩm</h1>
        <div className="flex flex-wrap gap-2">
          <ContentItem data={data} keyData={"type"} />
        </div>
      </div>

      <div className="ramAndStorage">
        <h1 className="font-semibold my-4 text-xl">Ram và bộ nhớ</h1>
        <div className="flex flex-wrap gap-2">
          <ContentItem data={data} keyData={"ram"} />
          <ContentItem data={data} keyData={"storage"} />
        </div>
      </div>
      <div className="screen">
        <h1 className="font-semibold my-4 text-xl">Màn hình</h1>
        <ContentItem data={data} keyData={"screen"} />
      </div>
      <div className="ops">
        <h1 className="font-semibold my-4 text-xl">Hệ điều hành</h1>
        <ContentItem data={data} keyData={"operateSys"} />
      </div>
      <div className="">
        <h1 className="font-semibold my-4 text-xl">Video Demo</h1>
        <VideoItem idVideo={data.idVideo} />
      </div>
    </div>
  );
}

export default ContentLaptop;
