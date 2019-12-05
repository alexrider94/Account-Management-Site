import React from 'react';
import '../css/Header.css';
import { ButtonToolbar, Button } from 'react-bootstrap';

//화면의 내용 출력
function MainBody() {
  return (
    <div className="Main-background">
      <div calssName="Main-content">
          test
      </div>
      <ButtonToolbar>
        {/* Standard button */}
        <Button>Default</Button>
      </ButtonToolbar>
    </div>
  );
}

export default MainBody;
