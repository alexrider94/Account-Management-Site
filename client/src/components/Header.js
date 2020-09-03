import React from "react";
import "../css/Header.css";
import SideMenu from "./SideMenu";
class Header extends React.Component {
  render() {
    return (
      <div className="header-background">
        <div className="header-title">
          <p>Study Group Management</p>
        </div>
        <SideMenu></SideMenu>
      </div>
    );
  }
}

export default Header;
