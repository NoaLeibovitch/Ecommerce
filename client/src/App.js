import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import MenuBar from "./components/Header/MenuBar";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {connect} from "react-redux";
import LogIn from "./pages/LogIn";
import UserProfile from "./pages/UserProfile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: ""};
    // this.page = this.props.page=='HomePage' ? <HomePage/> : <SignUp/>;
  }

  callAPI() {
    fetch("http://localhost:9000/users")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  getPage(){
    switch(this.props.app.page){
      case 'HomePage':
        return <HomePage/>;
      case 'SignUp':
        return <SignUp/>;
      case 'LogIn':
        return <LogIn/>;
      case 'UserProfile':
        return <UserProfile/>;
      default:
        return <HomePage/>;
    }
  }
  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
        <div className="App">
            <MenuBar/>
          {/*<header className="App-header">*/}
          {/*  <img src={logo} className="App-logo" alt="logo"/>*/}
          {/*  <h1 className="App-title">Welcome to React</h1>*/}
          {/*</header>*/}
          <p className="App-intro">{this.state.apiResponse}</p>
          {this.getPage()}
        </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return { ...state };
}
export default connect(mapStateToProps)(App);
