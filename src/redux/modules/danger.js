import myStation from "../../mystation.json"
import dangerData from "../../dangerData"

// Actions
const LOAD = "danger/LOAD";
const UPDATE = "danger/UPDATE";
const MYSTATE = "danger/MYSTATE"
const SAFESTATE = "danger/SAFESTATE"

// initialState
const initialState = {
    // 상태 변화를 체크하기 위해 자료 형태 변경
    list: dangerData,
    myStationList: myStation,
    is_loaded: false,
    isMystationState: false,
    safeState: true,
};

//Action Creators
export const loadDanger = (danger) => {
    return {type: LOAD, danger};
}
export const updateCheck = (name, line) => {
    return {type: UPDATE, name, line};
}
export const myStateCheck = (state) => {
    return {type: MYSTATE, state}
}
export const safeCheck = (state) => {
    return {type: SAFESTATE, state}
}


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "danger/LOAD": {
            // if (action.danger.length > 0) {
            //     return {list: action.danger, is_loaded: true};
            // }
            return state;
        }
        case "danger/UPDATE": {
            // var nowState = state.checkState? false: true
            // return {...state, checkState: nowState}

            const myList = state.myStationList.map((l) => {
                if (l.stationName === action.name && l.lineNum === action.line) {
                    var myState = l.checkState ? false : true
                    return {...l, checkState: myState};
                }
                return l;
            });

            return {myStationList: myList};
        }

        case "danger/MYSTATE": {
            return {...state, isMystationState: action.state}
        }

        case "danger/SAFESTATE": {
            return {...state, safeState: action.state}
        }

        default:
            return state;
    }
}

