import React from "react";

import ChooseSpot from "./ChooseSpot/ChooseSpot";
import StatsPanel from "./StatsPanel/StatsPanel"
//import TrainingDone from "./TrainingDone/TrainingDone";

import classes from "./ShootOrQuit.module.css";

const shootOrQuit = (props) => {
  const shootsDatas = [...props.shootsDatas]
  let totalShoots = 0
  let totalGoodShoots = 0
  let total3Pts = 0
  let total2Pts = 0
  let totalGood3Pts = 0
  let totalGood2Pts = 0

  shootsDatas.forEach((data, index) => {
    totalShoots += data[1]
    totalGoodShoots += data[0]
    if (index < 9) {
      totalGood2Pts +=  data[0]
      total2Pts += data[1]
    } else {
      totalGood3Pts +=  data[0]
      total3Pts += data[1]
    }
  })

  const per3Pts = (totalGood3Pts / total3Pts * 100).toFixed(0)
  const per2Pts = (totalGood2Pts / total2Pts * 100).toFixed(0)
  const perShoots = (totalGoodShoots / totalShoots * 100).toFixed(0)

  return (
    <div className={classes.Container}>
      <ChooseSpot />
      <div className={classes.StatsPanel}>
        <StatsPanel 
          statName="3PTS"
          stat={`${per3Pts}%`}
        />
        <StatsPanel 
          statName="2PTS"
          stat={`${per2Pts}%`}
        />
        <StatsPanel 
          statName="Total Shoots"
          stat={totalShoots}
        />
        <StatsPanel 
          statName="Good Shoots"
          stat={`${perShoots}%`}
        />
      </div>
      {/* <TrainingDone trainingDone={props.trainingDone} /> */}
    </div>
  );
};

export default shootOrQuit;
