import React from "react";

const leftBaseline = (props) => {
  const clickHandler = () => {
    props.areaChoosed(4);
  };

  const selectColor = () => {
    return props.isSelected[4] ? props.selectedColor : props.color;
  };
  return (
    <>
      <path
        onClick={clickHandler}
        id="circle1351"
        d="m 13.260689,-0.396875 v 32.718417 l 13.28601,-9.116757 A 27.219008,27.219008 0 0 1 25.421187,21.357353 V -0.396875 Z"
        style={{
          display: "block",
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
      <text x="16%" y="15%" fill="white" fontSize="3">
        {props.spotShootsData[4][0]} / {props.spotShootsData[4][1]}
      </text>
      <text x="16%" y="20%" fill="white" fontSize="3">
        {(
          (props.spotShootsData[4][0] / props.spotShootsData[4][1]) *
          100
        ).toFixed(0)}
        %
      </text>
    </>
  );
};

export default leftBaseline;
