import React, {useState} from 'react'; // we need this to make JSX compile
import './header.css';
import {User} from "../../icons/User";
import store from "../../store/store";
import {changeToUserProfilePage} from "../../store/app/actions";

type Props = {
    isSignedIn: boolean,
    firstName:string | null,
    changeToSignUpPage: any,
    changeToLogInPage: any,
    changeToUserProfilePage: any,
    logUserOut: any,
}

export const UserMenu = ({isSignedIn,firstName,changeToLogInPage,changeToSignUpPage,changeToUserProfilePage,logUserOut}:Props) =>{
    const [open, setOpen] = useState(false);

    const userLogOut = ()=>{
        store.dispatch(logUserOut());
    }
    const dropDownMenu = ()=>{
        return(<div className="dropDownMenu">
            <div className="options">
                <div className="menuItem" onClick={changeToUserProfilePage}>My Profile</div>
                <div className="menuItem" onClick={userLogOut}>Log Out</div>
            </div>
        </div>);
    }

    return( isSignedIn? <div className='LoggedInUserMenu' onClick={()=>{setOpen(!open);}}>
        <User/>
        {open? dropDownMenu(): ''}

        <label id='regular'>
            Hello
        </label>

        <label id="bold">
            {firstName}
        </label>
    </div>:
        <div className='NotLoggedInUserMenu'>
            <span className="UserMenuButton" onClick={()=>{changeToLogInPage(); console.log("Log In pressed");}}>
               Log In
                       </span>
            <span className="UserMenuButton" onClick={()=>{changeToSignUpPage(); console.log("Sign Up pressed");}}>
               <label id="bold" >Sign Up</label></span>
        </div>
    );
}

