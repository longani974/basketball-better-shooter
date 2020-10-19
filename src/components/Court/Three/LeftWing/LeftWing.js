import React from "react";

const leftWing = (props) => {
  const clickHandler = () => {
    props.areaChoosed(10);
  };

  const selectColor = () => {
    return props.isSelected[10] ? props.selectedColor : props.color;
  };
  return (
    <>
      <path
        onClick={clickHandler}
        id="path2149"
        d="M 12.747542,33.302877 1.7135901,40.953055 A 58.652294,58.652294 0 0 0 29.825053,61.899064 L 34.1297,49.562867 A 44.648435,44.648435 0 0 1 12.747542,33.302877 Z"
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
      <text x="15%" y="58%" fill="white" fontSize="3">
        {props.spotShootsData[10][0]} / {props.spotShootsData[10][1]}
      </text>
      <text x="15%" y="63%" fill="white" fontSize="3">
        {(
          (props.spotShootsData[10][0] / props.spotShootsData[10][1]) *
          100
        ).toFixed(0)}
        %
      </text>
    </>
  );
};

export default leftWing;
