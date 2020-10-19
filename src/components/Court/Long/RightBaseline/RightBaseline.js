import React from "react";

const rightBaseline = (props) => {
  const clickHandler = () => {
    props.areaChoosed(8);
  };

  const selectColor = () => {
    return props.isSelected[8] ? props.selectedColor : props.color;
  };
  return (
    <>
      <path
        onClick={clickHandler}
        id="path2157"
        d="m 73.360384,-0.396875 v 21.091219 a 27.219008,27.219008 0 0 1 -1.48208,2.510958 l 13.14648,9.020638 V -0.396875 Z"
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
      <text x="76%" y="15%" fill="white" fontSize="3">
        {props.spotShootsData[8][0]} / {props.spotShootsData[8][1]}
      </text>
      <text x="76%" y="20%" fill="white" fontSize="3">
        {(
          (props.spotShootsData[8][0] / props.spotShootsData[8][1]) *
          100
        ).toFixed(0)}
        %
      </text>
    </>
  );
};

export default rightBaseline;
