import React from "react";
import Button from "../../../UI/Button/Button";

import firebase from 'firebase'

const trainingDone = (props) => {
  return (
    <div>
      <Button btnType="Done" clicked={props.trainingDone}>
        Training Done
      </Button>
      <Button btnType="Done" clicked={()=>firebase.auth().signOut()}>
        Sign Out!
      </Button>
    </div>
  );
};

export default trainingDone;
