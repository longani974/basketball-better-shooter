import React from "react";

const rightWing = (props) => {
  return (
    <>
      <path
        id="path2161"
        d="m 71.429234,23.859525 a 27.219008,27.219008 0 0 1 -12.7894,9.80922 l 5.42085,15.369088 a 43.823131,43.823131 0 0 0 20.9057,-15.889468 z"
        style={{
          display: "inline",
          opacity: 1,
          fill: `${props.selectColor(props.isSelected[7], props.color)}`,
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

export default rightWing;
