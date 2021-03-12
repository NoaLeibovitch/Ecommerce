import React, {Component} from 'react'; // we need this to make JSX compile
import './header.css';
import {UserMenu} from './UserMenu';
import {connect} from "react-redux";
import {
    changeToSignUpPage,
    changeToHomePage,
    changeToLogInPage,
    changeToUserProfilePage
} from "../../store/app/actions";
import {logUserOut} from "../../store/user/actions";
import {UserState} from "../../store/types";

class MenuBar extends Component<{
    user:UserState,
    changeToSignUpPage: any,
    changeToHomePage: any,
    changeToLogInPage: any,
    changeToUserProfilePage: any,
    logUserOut:any,
}> {
    constructor(props: {user: UserState, changeToSignUpPage: any, changeToHomePage: any, changeToLogInPage:any,changeToUserProfilePage:any, logUserOut:any}) {
        super(props);
        console.log(props);
    }

    render() {
        return (<div className='MenuBar'>
            <div onClick={()=>{
                this.props.changeToHomePage();}}>Welcome to my website</div>
            <UserMenu logUserOut={this.props.logUserOut} changeToUserProfilePage={this.props.changeToUserProfilePage} changeToLogInPage={this.props.changeToLogInPage} changeToSignUpPage={this.props.changeToSignUpPage} isSignedIn={this.props.user.isSignedIn} firstName={this.props.user.firstName}/>
        </div>);
    }
}

const mapDispatchToProps= {
    changeToSignUpPage: changeToSignUpPage,
    changeToLogInPage: changeToLogInPage,
    changeToHomePage: changeToHomePage,
    changeToUserProfilePage: changeToUserProfilePage,
    logUserOut: logUserOut,
}
const mapStateToProps = (state:any)=>{
    return {...state };
}
export default connect(mapStateToProps,mapDispatchToProps)(MenuBar);