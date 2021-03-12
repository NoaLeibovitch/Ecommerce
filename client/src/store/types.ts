export const CHANGE_PAGE = 'CHANGE_PAGE'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export interface Page {
    page: string
}

interface ChangePageAction {
    type: typeof CHANGE_PAGE
    payload: Page
}
interface LogInAction {
    type: typeof LOG_IN
    payload: UserState
}
interface LogOutAction {
    type: typeof LOG_OUT
    payload: UserState
}
export interface AppState {
    page: string
}

export interface UserState{
    isSignedIn: boolean,
    id: number | null,
    firstName: string | null,
}

export interface State{
    app: AppState,
    user: UserState
}
export type PageActionTypes = ChangePageAction;
export type UserActionTypes = LogInAction | LogOutAction;