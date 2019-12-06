import React from 'react';
import '../css/MainBody.css';
import { ButtonToolbar, Button, Card} from 'react-bootstrap';

//화면의 내용 출력
function MainBody() {
  return (
    <div className="main-background">
      <div calssName="main-content">
          Study Group Board
      </div> 
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>This is context</Card.Text>
        </Card.Body>
      </Card>
      {/* <ButtonToolbar>
        <Button>MENU</Button>
      </ButtonToolbar> */}
    </div>
  );
}

export default MainBody;
