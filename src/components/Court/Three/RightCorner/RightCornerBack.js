import React from "react";

const rightCornerBack = (props) => {

  return (
    <>
      <path
        id="path2147"
        d="m 85.742574,-0.396875 v 32.778877 l 11.42979,7.924065 a 58.652294,58.652294 0 0 0 1.56373,-2.337843 V -0.396875 Z"
        style={{
          display: "inline",
          opacity: 1,
          fill: `${props.selectColor(props.isSelected[13], props.color)}`,
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

export default rightCornerBack;
