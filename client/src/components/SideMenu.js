import React from 'react';
import '../css/SideMenu.css';
import SideMenuForm from './SideMenuForm';

class SideMenu extends React.Component {
  render(){
    return(
      <div className="sideMenu-background">
        <div className="userbox">
          <SideMenuForm/>
        </div>
      </div>
    );
  }
}

export default SideMenu;
