import React, { Component } from "react";
import { connect } from "react-redux";

import Court from "../Court/Court";
import ScoreControl from "../ScoreControl/ScoreControl";
import * as actions from "../../store/actions/scoreControl";

import axios from "../../axios-orders";

class ShootingScreen extends Component {
  state = {
    //score: 0,
    //maxScore: 10,
    shooting: false,
    isAreaSelected: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    // Each index off the Array corresponding to a spot.
    // The first data is Nb off good shoots, the second data is the total Nb of shoots
    // At first is null until we got the datas from the backend
    spotShootsData: [
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
    ],
    localStorageData: [],
    totalGoodShoots: null,
    totalShoots: null,
  };

  componentDidMount() {
    // We receive the datas from the backend
    this.updateGlobalDatasHandler();
  }

  updateGlobalDatasHandler = () => {
    axios
      .get("https://shooter-trainer.firebaseio.com/trainingData.json")
      .then((response) => {
        const datas = response.data;

        let totalGoodShoots = 0;
        let totalShoots = 0;

        const spotShoots = [...this.state.spotShootsData];

        for (const data in datas) {
          for (let i = 0; i < datas[data].length; i++) {
            totalGoodShoots += datas[data][i].goodShoots;
            totalShoots += datas[data][i].nbOfShoots;

            // switch (datas[data][i].spot) {
            //   case 0:
            spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
            spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
            // break;
            //   case 1:
            //     spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
            //     spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
            //     break;
            //   case 2:
            //     spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
            //     spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
            //     break;
            //   case 3:
            //     spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
            //     spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
            //     break;
            //   case 4:
            //     spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
            //     spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
            //     break;
            //   case 5:
            //     spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
            //     spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
            //     break;
            //   case 6:
            //     spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
            //     spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
            //     break;
            //   case 7:
            //     spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
            //     spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
            //     break;
            //   case 8:
            //     spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
            //     spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
            //     break;
            //   case 9:
            //     spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
            //     spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
            //     break;
            //   case 10:
            //     spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
            //     spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
            //     break;
            //   case 11:
            //     spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
            //     spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
            //     break;
            //   case 12:
            //     spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
            //     spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
            //     break;
            //   case 13:
            //     spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
            //     spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
            //     break;

            //   default:
            //     console.error("Problem Number Spot");
            // }
          }
        }

        this.setState({
          totalGoodShoots: totalGoodShoots,
          totalShoots: totalShoots,
          spotShootsData: spotShoots,
        });
      });
  };

  // incrementHandler = () => {
  //   if (this.props.score < this.state.maxScore) {
  //     const oldScore = this.props.score;
  //     this.setState({
  //       score: oldScore + 1,
  //     });
  //   } else return;
  // };

  // decrementHandler = () => {
  //   if (this.props.score > 0) {
  //     const oldScore = this.props.score;
  //     this.setState({
  //       score: oldScore - 1,
  //     });
  //   } else return;
  // };

  shootingAreaHandler = (area) => {
    this.setState((prevState) => {
      const arrIsSelected = [...prevState.isAreaSelected];
      arrIsSelected[area] = true;
      return { isAreaSelected: arrIsSelected, shooting: true };
    });
  };

  finishShootingHandler = () => {
    const areaArr = this.state.isAreaSelected;

    let spotIndex;

    for (let i = 0; i < areaArr.length; i++) {
      if (areaArr[i]) {
        spotIndex = i;
      }
    }

    let data = [...this.state.localStorageData];
    if (
      localStorage.getItem("shootData") &&
      !this.state.localStorageData.length
    ) {
      const extractData = JSON.parse(localStorage.getItem("shootData"));
      for (let i = 0; i < extractData.data.length; i++) {
        data.push(extractData.data[i]);
      }
    }
    data.push({
      id: Date.now(),
      spot: spotIndex,
      goodShoots: this.props.score,
      nbOfShoots: this.props.maxScore,
    });

    localStorage.setItem(
      "shootData",
      JSON.stringify({
        data,
      })
    );
    this.props.onResetScore();
    this.setState((prevState) => {
      const arrIsSelected = [...prevState.isAreaSelected];
      const newArr = arrIsSelected.map((zone) => (zone = false));
      return {
        isAreaSelected: newArr,
        shooting: false,
        // score: 0,
        localStorageData: [...data],
      };
    });
  };

  // changeMaxScoreHandler = (nb) => {
  //   this.setState({
  //     maxScore: nb,
  //   });
  // };

  cleanDatas = () => {
    localStorage.clear();
    this.setState({
      localStorageData: [],
      spotShootsData: [
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
      ],
    });
  };

  trainingDoneHandler = () => {
    axios
      .post("/trainingData.json", this.state.localStorageData)
      .then((response) => {
        if (response.status === 200) {
          this.cleanDatas();
          this.updateGlobalDatasHandler();
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <Court
          areaChoosed={this.shootingAreaHandler}
          isSelected={this.state.isAreaSelected}
          totalGoodShoots={this.state.totalGoodShoots}
          totalShoots={this.state.totalShoots}
          spotShootsData={this.state.spotShootsData}
        />
        <ScoreControl
          shooting={this.state.shooting}
          score={this.props.score}
          maxScore={this.props.maxScore}
          addPoint={this.props.onIncrementScore}
          removePoint={this.props.onDecrementScore}
          scoreDone={this.finishShootingHandler}
          trainingDone={this.trainingDoneHandler}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.score,
    maxScore: state.maxScore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementScore: () => dispatch(actions.incrementScore()),
    onDecrementScore: () => dispatch(actions.decrementScore()),
    onResetScore: () => dispatch(actions.resetScore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShootingScreen);
