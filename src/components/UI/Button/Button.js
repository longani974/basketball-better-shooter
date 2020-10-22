import React from "react";

import classes from "./Button.module.css";

const button = (props) => {
  const clickHandler = (event) => {
    event.preventDefault();
    props.clicked();
  };
  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(" ")}
      onClick={clickHandler}
    >
      {props.children}
    </button>
  );
};

export default button;
