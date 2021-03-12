import React, {Component} from "react";
import {SideMenu} from "../components/Users/profile/SideMenu";
import {EditUser} from "../components/Users/profile/EditUser";
import {connect} from "react-redux";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI(id) {
      fetch("http://localhost:9000/users/"+id)
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI(this.props.user.id);
  }

  render() {
      return (
        <div className='UserProfile'>
            <div className='UserProfileSideMenu'>
                <SideMenu/>
            </div>
          <div className='UserProfileContent'>
              <EditUser/>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state)=>{
    return { ...state };
}
export default connect(mapStateToProps)(UserProfile);
