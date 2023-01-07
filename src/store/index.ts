import { legacy_createStore,combineReducers,applyMiddleware,compose} from "redux";
import reduxThunk from 'redux-thunk' 
import handleNum from './NumStatus/reducer';
import handleArr from './ArrStatus/reducer';

const reducers = combineReducers({
    handleArr,
    handleNum
});

// 

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const store =
legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)));

export default store
