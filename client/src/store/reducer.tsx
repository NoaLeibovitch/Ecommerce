import {combineReducers} from 'redux';

import {appInitialState, appReducer} from "./app/reducers";
import {userInitialState, userReducer} from "./user/reducers";
import {State} from "./types";

export const initialState:State = {
    app: {...appInitialState},
    user: {...userInitialState}
}

export default combineReducers({
    app:appReducer,
    user:userReducer
});