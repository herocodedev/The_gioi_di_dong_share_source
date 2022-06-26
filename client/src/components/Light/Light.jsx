import React, { useEffect, useState } from "react";
import "./Light.css";
function Light(props) {
  const handleLightChange = () => {
    const lightEl = document.querySelector(".body-light");
    if (lightEl.classList.contains("on")) {
      lightEl.classList.remove("on");
    } else {
      lightEl.classList.add("on");
    }
  };
  useEffect(() => {
    let idSetInterval = setInterval(() => {
      handleLightChange();
    }, 800);
    return () => {
      clearInterval(idSetInterval);
    };
  });
  return (
    <div className="body-light on">
      <div className="light">
        <div className="bulb">
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default Light;
