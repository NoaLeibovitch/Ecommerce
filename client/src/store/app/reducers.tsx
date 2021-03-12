import {
    CHANGE_PAGE,
    PageActionTypes,
    AppState
} from '../types'


export const appInitialState:AppState = {
    page: 'HomePage',
}

export function appReducer (
    state = appInitialState,
    action:PageActionTypes
):AppState {
    switch (action.type) {
        case CHANGE_PAGE:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
