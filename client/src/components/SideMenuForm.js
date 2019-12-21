import React from 'react';
import {Form,Button} from 'react-bootstrap';

class SideMenuForm extends React.Component {
  render(){
    return(
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className='sideMenu-button'>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </div>
      </Form>
    );
  }
}

export default SideMenuForm;
