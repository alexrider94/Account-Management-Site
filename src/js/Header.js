import React from 'react';
import '../css/Header.css';

//화면의 내용 출력

//헤더 전체부분 수정을 위한 태그를 여기에 설정할지 아니면 인덱스 부분에서 처리할지?

function Header() {
  return (
    <div className="header-background">
      <div className="header-title">
        <p>Study Group Management</p>
      </div>
    </div>
  );
}

export default Header;
