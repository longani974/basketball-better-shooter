import React from "react";

const staightBack = (props) => {

  return (
    <>
      <path
        id="path2153"
        d="M 34.879007,49.823833 30.575911,62.156414 A 58.652294,58.652294 0 0 0 49.2125,65.196537 58.652294,58.652294 0 0 0 67.849084,62.156414 L 63.545994,49.823833 A 44.648435,44.648435 0 0 1 49.2125,52.187512 44.648435,44.648435 0 0 1 34.879007,49.823833 Z"
        style={{
          display: "inline",
          opacity: 1,
          fill: `${props.selectColor(props.isSelected[11], props.color)}`,
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: "0.79375",
          strokeLinecap: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
        }}
      />
    </>
  );
};

export default staightBack;
