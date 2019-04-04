import React, { Component } from "react";

import AuthContext from "../auth-context";

class Profile extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => {
          return (
            <h1>{authContext.isAuth ? "you are Logged in" : "Logged out"}</h1>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Profile;
