import React from "react";

const straight = (props) => {
  const clickHandler = () => {
    props.areaChoosed(6);
  };

  const selectColor = () => {
    return props.isSelected[6] ? props.selectedColor : props.color;
  };
  return (
    <>
      <path
        onClick={clickHandler}
        id="path2163"
        d="M 40.53396,33.932812 35.114135,49.299834 A 43.823131,43.823131 0 0 0 49.2125,51.629924 43.823131,43.823131 0 0 0 63.310864,49.30035 L 57.891044,33.932812 A 27.219008,27.219008 0 0 1 49.2125,35.353397 27.219008,27.219008 0 0 1 40.53396,33.932812 Z"
        style={{
          display: "inline",
          opacity: 1,
          fill: `${selectColor()}`,
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
      <text x="47%" y="50%" fill="white" fontSize="3">
        {props.spotShootsData[6][0]} / {props.spotShootsData[6][1]}
      </text>
      <text x="47%" y="55%" fill="white" fontSize="3">
        {(
          (props.spotShootsData[6][0] / props.spotShootsData[6][1]) *
          100
        ).toFixed(0)}
        %
      </text>
    </>
  );
};

export default straight;
