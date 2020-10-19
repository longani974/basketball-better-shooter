import React from "react";

import classes from "./Score.module.css";

const score = (props) => {
  return (
    <div className={classes.Score}>
      {props.currentScore} / {props.maxScore}{" "}
    </div>
  );
};

export default score;
