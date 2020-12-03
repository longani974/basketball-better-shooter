import React from "react";

const leftWingBack = (props) => {
  return (
    <>
      <path
        id="path2159"
        d="m 26.995768,23.859525 -13.536641,9.288322 a 43.823131,43.823131 0 0 0 20.9057,15.88947 L 39.785684,33.668229 A 27.219008,27.219008 0 0 1 26.995768,23.859525 Z"
        style={{
          display: "inline",
          opacity: 1,
          fill: `${props.selectColor(props.isSelected[5], props.color)}`,
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: "0.396875",
          strokeLinecap: "square",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
        }}
      />
    </>
  );
};

export default leftWingBack;
