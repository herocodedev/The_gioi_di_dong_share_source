import React from "react";

function BoxCT(props) {
  const { color, height, width, content } = props;
  return (
    <div className="w-full h-full">
      <div
        style={{
          backgroundColor: color,
          width: width,
          height: height,
          boxShadow: `0 10px 15px -3px ${color}, 0 4px 6px -4px ${color}`,
        }}
        className={`flex items-center justify-center text-white  rounded-xl bg-${color}-500 shadow-lg `}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}

export default BoxCT;
