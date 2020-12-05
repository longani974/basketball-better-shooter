import React from "react";
import { floorColor } from "../../../constants/colors";


const floor = (props) => {
  let shootingData = "";
  if (props.totalGoodShoots >= 0 && props.totalShoots) {
    shootingData = `${props.totalGoodShoots}/${props.totalShoots} - ${(
      (props.totalGoodShoots / props.totalShoots) *
      100
    ).toFixed(0)}%`;
  } else {
    shootingData = "loading data...";
  }
  return (
    <>
      <rect
        style={{
          display: "inline",
          opacity: 1,
          fill: floorColor,
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: "0.793745",
          strokeLinecap: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        id="rect971"
        width="99.21875"
        height="80.673836"
        x="-0.3968744"
        y="-0.39687589"
      />
      <text x="5%" y="95%" fill="white" fontSize="4">
        {shootingData}
      </text>
    </>
  );
};

export default floor;
