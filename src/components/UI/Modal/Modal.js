import React from "react"

import classes from "./Modal.module.css"

const modal = (props) => {
let isApparent = props.isShooting ? null : classes.nonApparent
const classNames = [classes.modal, isApparent]
    return (
        <div className={classNames.join(" ")}>
            {props.children}
        </div>
    )
}

export default modal