import React from "react";

const rightWingBack = (props) => {

  return (
    <>
      <path
        id="path2151"
        d="m 85.677454,33.302877 a 44.648435,44.648435 0 0 1 -21.38215,16.259474 l 4.30464,12.336713 a 58.652294,58.652294 0 0 0 28.11095,-20.946525 z"
        style={{
          display: "inline",
          opacity: 1,
          fill: `${props.selectColor(props.isSelected[12], props.color)}`,
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

export default rightWingBack;
