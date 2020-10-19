import React from "react";

import ChooseSpot from "./ChooseSpot/ChooseSpot";
import TrainingDone from "./TrainingDone/TrainingDone";

import classes from "./ShootOrQuit.module.css";

const shootOrQuit = (props) => {
  return (
    <div className={classes.Container}>
      <ChooseSpot />
      <TrainingDone trainingDone={props.trainingDone} />
    </div>
  );
};

export default shootOrQuit;
