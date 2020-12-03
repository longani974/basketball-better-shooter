import React from "react";
import { aroundRimColor} from "../../../constants/colors";

const aroundRim = (props) => {

  
  return (
    <>
      <path
        transform="scale(0.26458333)"
        d="M 157.30078 1.5058594 L 157.30078 31.080078 L 157.32031 31.080078 A 28.682251 28.682251 0 0 0 186 59.425781 A 28.682251 28.682251 0 0 0 214.67969 31.080078 L 214.69922 31.080078 L 214.69922 1.5058594 L 157.30078 1.5058594 z "
        style={{
          display: "inline",
          opacity: 1,
          fill: `${props.selectColor(props.isSelected[0], aroundRimColor)}`,
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: "1.5",
          strokeLinecap: "square",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
        }}
        id="path1312"
      />
    </>
  );
};

export default aroundRim;
