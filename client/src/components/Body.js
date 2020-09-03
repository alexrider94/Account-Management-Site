import React from "react";
import "../css/Body.css";
import StudyCard from "./StudyCard";
import { SignUpPage } from "../pages";
import { Route } from "react-router-dom";

class Body extends React.Component {
  render() {
    return (
      <div className="main-background">
        <Route path="/main" component={StudyCard} />
        <Route path="/signup" component={SignUpPage} />
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }

  onLogin = () => {
    this.setState({
      logged: true,
    });
  };

  onLogout = () => {
    this.setState({
      logged: false,
    });
    window.sessionStorage.clear();
  };

  componentDidMount() {
    const email = window.sessionStorage.getItem("email");
    if (email) {
      this.onLogin();
    } else {
      this.onLogout();
    }
  }
}

export default Body;
