import React from "react";

const leftCornerBack = (props) => {
  return (
    <>
      <path
        id="path1435"
        d="m -0.311092,-0.396875 v 38.365618 a 58.652294,58.652294 0 0 0 1.5632121,2.33784 L 12.68243,32.382002 V -0.396875 Z"
        style={{
          display: "inline",
          opacity: 1,
          fill: `${props.selectColor(props.isSelected[9], props.color)}`,
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

export default leftCornerBack;
