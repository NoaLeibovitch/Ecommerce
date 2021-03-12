import { CHANGE_PAGE , PageActionTypes} from '../types'


export function changeToSignUpPage(): PageActionTypes {
    return {
        type: CHANGE_PAGE,
        payload: {page: 'SignUp'},
    }
}
export function changeToLogInPage(): PageActionTypes {
    return {
        type: CHANGE_PAGE,
        payload: {page: 'LogIn'},
    }
}
export function changeToHomePage(): PageActionTypes {
    return {
        type: CHANGE_PAGE,
        payload: {page: 'HomePage'},
    }
}
export function changeToUserProfilePage(): PageActionTypes {
    return {
        type: CHANGE_PAGE,
        payload: {page: 'UserProfile'},
    }
}