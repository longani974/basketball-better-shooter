import React, { Component } from "react";

import Court from "../Court/Court";
import ScoreControl from "../ScoreControl/ScoreControl";

import axios from "../../axios-orders";

class ShootingScreen extends Component {
  state = {
    score: 0,
    maxScore: 10,
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
          // let goodShoots = 0;
          // let nbShoots = 0;

          // let spotGoodShoots = 0;
          // let sportNbShoots = 0;

          for (let i = 0; i < datas[data].length; i++) {
            // goodShoots = datas[data][i].goodShoots;
            // nbShoots = datas[data][i].nbOfShoots;
            // console.log(datas[data][i], " index " + i);
            totalGoodShoots += datas[data][i].goodShoots;
            totalShoots += datas[data][i].nbOfShoots;

            switch (datas[data][i].spot) {
              case 0:
                spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
                spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
                break;
              case 1:
                spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
                spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
                break;
              case 2:
                spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
                spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
                break;
              case 3:
                spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
                spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
                break;
              case 4:
                spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
                spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
                break;
              case 5:
                spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
                spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
                break;
              case 6:
                spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
                spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
                break;
              case 7:
                spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
                spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
                break;
              case 8:
                spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
                spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
                break;
              case 9:
                spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
                spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
                break;
              case 10:
                spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
                spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
                break;
              case 11:
                spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
                spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
                break;
              case 12:
                spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
                spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
                break;
              case 13:
                spotShoots[datas[data][i].spot][0] += datas[data][i].goodShoots;
                spotShoots[datas[data][i].spot][1] += datas[data][i].nbOfShoots;
                break;

              default:
                console.error("Problem Number Spot");
            }
          }

          // datas[data].forEach((element, index) => {
          //   goodShoots = element.goodShoots;
          //   nbShoots = element.nbOfShoots;
          //   console.log(element, " index " + index);
          // });
          // totalGoodShoots += goodShoots;
          // totalShoots += nbShoots;
        }

        this.setState({
          totalGoodShoots: totalGoodShoots,
          totalShoots: totalShoots,
          spotShootsData: spotShoots,
        });
      });
  };

  incrementHandler = () => {
    if (this.state.score < this.state.maxScore) {
      const oldScore = this.state.score;
      this.setState({
        score: oldScore + 1,
      });
    } else return;
  };

  decrementHandler = () => {
    if (this.state.score > 0) {
      const oldScore = this.state.score;
      this.setState({
        score: oldScore - 1,
      });
    } else return;
  };

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
      goodShoots: this.state.score,
      nbOfShoots: this.state.maxScore,
    });

    localStorage.setItem(
      "shootData",
      JSON.stringify({
        data,
      })
    );

    this.setState((prevState) => {
      const arrIsSelected = [...prevState.isAreaSelected];
      const newArr = arrIsSelected.map((zone) => (zone = false));
      return {
        isAreaSelected: newArr,
        shooting: false,
        score: 0,
        localStorageData: [...data],
      };
    });
  };

  changeMaxScoreHandler = (nb) => {
    this.setState({
      maxScore: nb,
    });
  };

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
    //console.log("training done");

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
          score={this.state.score}
          maxScore={this.state.maxScore}
          addPoint={this.incrementHandler}
          removePoint={this.decrementHandler}
          scoreDone={this.finishShootingHandler}
          changeMaxScore={this.changeMaxScoreHandler}
          trainingDone={this.trainingDoneHandler}
        />
      </>
    );
  }
}

export default ShootingScreen;
