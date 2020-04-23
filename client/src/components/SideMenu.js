import React from 'react';
import '../css/SideMenu.css';
import LoginForm from './LoginForm';
import MenuForm from './MenuForm';

class SideMenu extends React.Component {
  render(){
    return(
      <div className="sideMenu-background">
        <div className="userbox">
          <LoginForm/>
        </div>
        <div className="menubox">
          <MenuForm/>
        </div>
      </div>
    );
  }
}

export default SideMenu;
