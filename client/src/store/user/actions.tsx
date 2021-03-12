import { LOG_IN , LOG_OUT, UserActionTypes} from '../types'


export function logUserIn(firstName:string, id:number): UserActionTypes {
    console.log("in logUserIn action");
    return {
        type: LOG_IN,
        payload: {
            isSignedIn: true,
            id: id,
            firstName: firstName
        },
    }
}


export function logUserOut(): UserActionTypes {
    console.log("in logUserOut action");
    return {
        type: LOG_OUT,
        payload: {
            isSignedIn: false,
            id: null,
            firstName: null
        },
    }
}
