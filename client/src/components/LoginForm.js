import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {

  render() {
    return (
      <Form autoComplete="off">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className='sideMenu-button'>
          <Link to="/signup">
            <Button variant="primary">
              Sign Up
              </Button>
          </Link>
          <Button variant="primary">
            Sign In
            </Button>
        </div>
      </Form>
    );
  }
}

export default LoginForm;
