import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../api/api'

class LoginForm extends React.Component {

  state = {
    email: "",
    password: "",
    name: ""
  }

  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }

  handleLoginUser = async () => {
    const { email, password } = this.state;
    const payload = { email, password };

    await api.getSelectedUser(payload).then(res => {
      window.alert("login complete!");
      this.setState({
        name: '',
        rating: '',
        time: '',
      })
    });

  }

  render() {
    return (
      <Form autoComplete="off">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" onChange={this.handleChange} placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="Password" />
        </Form.Group>
        <div className='sideMenu-button'>
          <Link to="/signup">
            <Button variant="primary">
              Sign Up
              </Button>
          </Link>
          <Button variant="primary" onClick={this.handleLoginUser}>
            Sign In
            </Button>
        </div>
      </Form>
    );
  }
}

export default LoginForm;
