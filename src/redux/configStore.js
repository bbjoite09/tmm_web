import {createStore, combineReducers, applyMiddleware} from "redux";
import {createBrowserHistory} from "history";
import thunk from "redux-thunk";
import danger from "./modules/danger"

export const history = createBrowserHistory();

const middlewares = [thunk];

//const 스토에어 적용
const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({danger});
const store = createStore(rootReducer, enhancer);

export default store;