import React, { Component, Suspense } from "react";
import ReactDOM from "react-dom";
import AuthContext from "./auth-context";
import "./styles.css";

import Login from "./components/Login";
import Profile from "./components/Profile";
const Posts = React.lazy(() => {
  return import("./components/Posts");
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }

  toggleAuth = () => {
    this.setState(prevState => {
      return {
        isAuth: !prevState.isAuth
      };
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ isAuth: this.state.isAuth, toggleAuth: this.toggleAuth }}
      >
        <Login />
        <Profile />
        {this.state.isAuth ? (
          <Suspense fallback={<div>loading...</div>}>
            <Posts />
          </Suspense>
        ) : (
          <div>Without suspense</div>
        )}
      </AuthContext.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
