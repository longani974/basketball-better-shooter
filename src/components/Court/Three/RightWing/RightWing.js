import React from "react";

const rightWing = (props) => {
  const clickHandler = () => {
    props.areaChoosed(12);
  };

  const selectColor = () => {
    return props.isSelected[12] ? props.selectedColor : props.color;
  };
  return (
    <>
      <path
        onClick={clickHandler}
        id="path2151"
        d="m 85.677454,33.302877 a 44.648435,44.648435 0 0 1 -21.38215,16.259474 l 4.30464,12.336713 a 58.652294,58.652294 0 0 0 28.11095,-20.946525 z"
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
      <text x="80%" y="58%" fill="white" fontSize="3">
        {props.spotShootsData[12][0]} / {props.spotShootsData[12][1]}
      </text>
      <text x="80%" y="63%" fill="white" fontSize="3">
        {(
          (props.spotShootsData[12][0] / props.spotShootsData[12][1]) *
          100
        ).toFixed(0)}
        %
      </text>
    </>
  );
};

export default rightWing;
