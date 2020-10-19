import React from "react";

const rightBaseline = (props) => {
  const clickHandler = () => {
    props.areaChoosed(3);
  };

  const selectColor = () => {
    return props.isSelected[3] ? props.selectedColor : props.color;
  };

  return (
    <>
      <path
        onClick={clickHandler}
        id="path2167"
        d="m 57.593894,-0.396875 v 8.6371991 h -0.006 a 8.3765181,8.3765181 0 0 1 -3.03546,6.3551669 l 10.76834,14.361398 a 26.32604,26.32604 0 0 0 7.30705,-8.790161 V -0.396875 Z"
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
      <text x="65%" y="15%" fill="white" fontSize="3">
        {props.spotShootsData[3][0]} / {props.spotShootsData[3][1]}
      </text>
      <text x="65%" y="20%" fill="white" fontSize="3">
        {(
          (props.spotShootsData[3][0] / props.spotShootsData[3][1]) *
          100
        ).toFixed(0)}
        %
      </text>
    </>
  );
};

export default rightBaseline;
