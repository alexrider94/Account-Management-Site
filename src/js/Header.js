import React from 'react';
import '../css/Header.css';

//화면의 내용 출력
function Header() {
  return (
    <div className="header-background">
      <div className="header-title">
        <p>Study Group Management</p>
      </div>
      <div calssName="header-menu">
        <div className="header-menu-box">
          <p>This is menu box</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
