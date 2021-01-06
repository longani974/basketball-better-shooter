import * as actionTypes from '../actions/actionTypes';

const initialState = {
    score: 0,
    maxScore: 10,
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
    totalGoodShoots: null,
    totalShoots: null,
    error: false,
    localStorageData: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_SCORE:
            if (state.score < state.maxScore) {
                return {
                    ...state,
                    score: state.score + 1,
                };
            } else return state;
        case actionTypes.DECREMENT_SCORE:
            if (state.score > 0) {
                return {
                    ...state,
                    score: state.score - 1,
                };
            } else return state;
        case actionTypes.CHANGE_MAX_SCORE:
            return {
                ...state,
                maxScore: action.maxScore,
            };
        case actionTypes.INCREMENT_NB_SHOOTS:
            return {
                ...state,
                maxScore: state.maxScore + 1,
            };
        case actionTypes.DECREMENT_NB_SHOOTS:
            if (state.maxScore > 0) {
                return {
                    ...state,
                    maxScore: state.maxScore - 1,
                };
            } else return state;
        case actionTypes.HANDLE_CHANGE:
            return {
                ...state,
                maxScore: action.nb,
            };
        case actionTypes.RESET_SCORE:
            return {
                ...state,
                score: 0,
            };
        case actionTypes.SET_DATAS:
            const datas = action.datas;

            let totalGoodShoots = 0;
            let totalShoots = 0;

            const spotShoots = [...state.spotShootsData];

            for (const data in datas) {
                for (let i = 0; i < datas[data].length; i++) {
                    totalGoodShoots += datas[data][i].goodShoots;
                    totalShoots += datas[data][i].nbOfShoots;
                    spotShoots[datas[data][i].spot][0] +=
                        datas[data][i].goodShoots;
                    spotShoots[datas[data][i].spot][1] +=
                        datas[data][i].nbOfShoots;
                }
            }
            return {
                ...state,
                totalGoodShoots: totalGoodShoots,
                totalShoots: totalShoots,
                spotShootsData: spotShoots,
            };
        case actionTypes.FETCH_DATAS_FAIL:
            return {
                ...state,
                error: true,
            };
        case actionTypes.SEND_DATAS_FAIL:
            return {
                ...state,
                error: true,
            };
        case actionTypes.CLEAN_DATAS:
            localStorage.clear();
            return {
                ...state,
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
            };
        default:
            return state;
    }
};

export default reducer;
