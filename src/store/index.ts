import { legacy_createStore,combineReducers} from "redux";
import reducer from "./reducer";
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//让浏览器redux-dev-tools能正常使用
import handleNum from './NumStatus/reducer';
import handleArr from './ArrStatus/reducer';

const reducers = combineReducers({
    handleArr,
    handleNum
});

const store = legacy_createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());
export default store
