import React, {Component} from "react";
import {SignUpForm} from "../components/Users/forms/SignUpForm";

class SignUp extends Component {
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
         <SignUpForm/>
        </div>
    );
  }
}

export default SignUp;
