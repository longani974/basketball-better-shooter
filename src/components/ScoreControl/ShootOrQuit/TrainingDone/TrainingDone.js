import React from "react";
import Button from "../../../UI/Button/Button";

const trainingDone = (props) => {
  return (
    <div>
      <Button btnType="Done" clicked={props.trainingDone}>
        Training Done
      </Button>
    </div>
  );
};

export default trainingDone;
