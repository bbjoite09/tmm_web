import {firestore} from "../../firebase";

const danger_db = firestore.collection("danger");

// Actions
const LOAD = "danger/LOAD";

// initialState
const initialState = {
    // 상태 변화를 체크하기 위해 자료 형태 변경
    // list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    list: [
        {
            "id": 0,
            "lineNum": "1호선",
            "stationName": "가능",
            "enterNum": 1,
            "manage": "코레일",
            "minDis": 11,
            "maxDis": 17.5,
            "avg": "14.6125",
            "danger": "매우위험"
        },
    ],
    is_loaded: false,
};

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
            if (action.danger.length > 0) {
                return {list: action.danger, is_loaded: true};
            }
            return state;
        }

        default:
            return state;
    }
}

