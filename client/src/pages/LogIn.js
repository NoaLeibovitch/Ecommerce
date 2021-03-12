import React, {Component} from "react";
import {LogInForm} from "../components/Users/forms/LogInForm";
import {logUserIn} from "../store/user/actions";
import {connect} from "react-redux";
import {changeToHomePage} from "../store/app/actions";

class LogIn extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { apiResponse: "" };
  // }
  //
  // callAPI() {
  //   fetch("http://localhost:9000/users")
  //       .then(res => res.text())
  //       .then(res => this.setState({ apiResponse: res }));
  // }
  //
  // componentWillMount() {
  //   this.callAPI();
  // }

  render() {
    return (
        <div className='Form'>
         <LogInForm logUserIn={logUserIn} changeToHomePage={changeToHomePage}/>
        </div>
    );
  }
}

const mapDispatchToProps= {
    // changePage: (newPage:Page)=>{changePage(newPage)},
    logUserIn: logUserIn,
    changeToHomePage: changeToHomePage,

    // changePage: () => ({ type: 'CHANGE_PAGE' })
    // changePage: () => ({ type: 'CHANGE_PAGE' , payload: {page: 'SignUp'}})
}
const mapStateToProps = (state)=>{
    return {...state };
}
export default connect(mapStateToProps,mapDispatchToProps)(LogIn);