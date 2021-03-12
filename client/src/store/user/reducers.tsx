import {
    LOG_IN,
    LOG_OUT,
    UserActionTypes,
    UserState
} from '../types'


export const userInitialState:UserState = {
    isSignedIn: false,
    id: null,
    firstName: null,
}

export function userReducer (
    state = userInitialState,
    action:UserActionTypes
):UserState {
    // Reducers usually look at the type of action that happened
    // to decide how to update the state
    console.log("in userReducer :");
    console.log(action);

    switch (action.type) {
        case LOG_IN:
            return { ...state, ...action.payload }
        case LOG_OUT:
            return { ...state, ...action.payload }
        default:
            // If the reducer doesn't care about this action type,
            // return the existing state unchanged
            return state
    }
}
