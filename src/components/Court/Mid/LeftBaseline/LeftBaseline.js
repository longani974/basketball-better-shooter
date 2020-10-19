import React from "react";

const leftBaseline = (props) => {
  const clickHandler = () => {
    props.areaChoosed(1);
  };

  const selectColor = () => {
    return props.isSelected[1] ? props.selectedColor : props.color;
  };
  return (
    <>
      <path
        onClick={clickHandler}
        id="path1314"
        d="m 26.19375,-0.396875 v 21.306193 a 26.32604,26.32604 0 0 0 6.910173,8.047571 L 43.872258,14.594975 A 8.3765181,8.3765181 0 0 1 40.836784,8.2403241 h -0.0057 V -0.396875 Z"
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
      <text x="28%" y="15%" fill="white" fontSize="3">
        {props.spotShootsData[1][0]} / {props.spotShootsData[1][1]}
      </text>
      <text x="28%" y="20%" fill="white" fontSize="3">
        {(
          (props.spotShootsData[1][0] / props.spotShootsData[1][1]) *
          100
        ).toFixed(0)}
        %
      </text>
    </>
  );
};

export default leftBaseline;
