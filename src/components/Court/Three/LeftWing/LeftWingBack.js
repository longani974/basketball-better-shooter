import React from "react";

const leftWingBack = (props) => {

  return (
    <>
      <path
        id="path2149"
        d="M 12.747542,33.302877 1.7135901,40.953055 A 58.652294,58.652294 0 0 0 29.825053,61.899064 L 34.1297,49.562867 A 44.648435,44.648435 0 0 1 12.747542,33.302877 Z"
        style={{
          display: "inline",
          opacity: 1,
          fill: `${props.selectColor(props.isSelected[10], props.color)}`,
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

export default leftWingBack;
