import React from "react";
import "../css/SideMenu.css";
import SignInBox from "./SignInBox";
import SignedBox from "./SignedBox";

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      email: "",
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
    this.email = window.sessionStorage.getItem("email");
    if (this.email) {
      this.onLogin();
    } else {
      this.onLogout();
    }
  }

  render() {
    const { logged } = this.state;

    return (
      <div className="sideMenu-background">
        <div className="userbox">{logged ? <SignedBox /> : <SignInBox />}</div>
      </div>
    );
  }
}

export default SideMenu;
