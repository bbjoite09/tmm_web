import {firestore} from "../../firebase";
import dangerData from "../../dangerData"
const danger_db = firestore.collection("danger");

// Actions
const LOAD = "danger/LOAD";

// initialState
const initialState = {
    // 상태 변화를 체크하기 위해 자료 형태 변경
    list: dangerData,
    is_loaded: false,
};

//Action Creators
export const loadDanger = (danger) => {
    return {type: LOAD, danger};
}


// 통신
export const loadDangerFB = () => {
    return function (dispatch) {
        danger_db.get().then((docs) => {
            let danger_data = [];
            docs.forEach((doc) => {

                if (doc.exists) {
                    danger_data = [...danger_data, {id: doc.id, ...doc.data()}];
                }
            })
            console.log(danger_data);
            dispatch(loadDanger(danger_data));
        });
    }
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

        default:
            return state;
    }
}

