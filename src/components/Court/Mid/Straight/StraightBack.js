import React from "react";

const straight = (props) => {
  return (
    <>
      <path
        id="path2169"
        d="M 53.917634,15.071432 A 8.3765181,8.3765181 0 0 1 49.2125,16.518372 8.3765181,8.3765181 0 0 1 44.506843,15.071948 L 33.739026,29.432829 a 26.32604,26.32604 0 0 0 15.473474,5.0276 26.32604,26.32604 0 0 0 15.473474,-5.0276 z"
        style={{
          display: "inline",
          opacity: 1,
          fill: `${props.selectColor(props.isSelected[2], props.color)}`,
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
    </>
  );
};

export default straight;
