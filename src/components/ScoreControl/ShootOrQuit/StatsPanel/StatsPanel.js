import React from 'react'

import classes from "./StatsPanel.module.css"
import { whiteTransparent } from "../../../../constants/colors";

const StatsPanel = (props) => {
    return (
        <div style={{ "--bgColor": whiteTransparent }} className={classes.Stat}>
            <h2>{props.statName}</h2>
            <p>{props.stat}</p>
        </div>
    )
}

export default StatsPanel