import React from 'react';
import '../css/Header.css';

class Header extends React.Component {
  render(){
    return(
      <div className="header-background">
        <div className="header-title">
          <p>Study Group Management</p>
        </div>
      </div>
    );
  }
}

export default Header;
