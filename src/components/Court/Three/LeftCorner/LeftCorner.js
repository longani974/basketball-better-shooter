import React from "react";

const leftCorner = (props) => {
  const clickHandler = () => {
    props.areaChoosed(9);
  };

  const selectColor = () => {
    return props.isSelected[9] ? props.selectedColor : props.color;
  };
  return (
    <>
      <path
        onClick={clickHandler}
        id="path1435"
        d="m -0.311092,-0.396875 v 38.365618 a 58.652294,58.652294 0 0 0 1.5632121,2.33784 L 12.68243,32.382002 V -0.396875 Z"
        style={{
          display: "inline",
          opacity: 1,
          fill: `${selectColor()}`,
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
      <text x="3%" y="15%" fill="white" fontSize="3">
        {props.spotShootsData[9][0]} / {props.spotShootsData[9][1]}
      </text>
      <text x="3%" y="20%" fill="white" fontSize="3">
        {(
          (props.spotShootsData[9][0] / props.spotShootsData[9][1]) *
          100
        ).toFixed(0)}
        %
      </text>
    </>
  );
};

export default leftCorner;
