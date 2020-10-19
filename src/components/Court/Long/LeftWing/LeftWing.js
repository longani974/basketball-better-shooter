import React from "react";

const leftWing = (props) => {
  const clickHandler = () => {
    props.areaChoosed(5);
  };

  const selectColor = () => {
    return props.isSelected[5] ? props.selectedColor : props.color;
  };
  return (
    <>
      <path
        onClick={clickHandler}
        id="path2159"
        d="m 26.995768,23.859525 -13.536641,9.288322 a 43.823131,43.823131 0 0 0 20.9057,15.88947 L 39.785684,33.668229 A 27.219008,27.219008 0 0 1 26.995768,23.859525 Z"
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
      <text x="24%" y="42%" fill="white" fontSize="3">
        {props.spotShootsData[5][0]} / {props.spotShootsData[5][1]}
      </text>
      <text x="24%" y="47%" fill="white" fontSize="3">
        {(
          (props.spotShootsData[5][0] / props.spotShootsData[5][1]) *
          100
        ).toFixed(0)}
        %
      </text>
    </>
  );
};

export default leftWing;
