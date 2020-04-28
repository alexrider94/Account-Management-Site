import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../api/api';


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
      window.sessionStorage.setItem('email', payload.email);
      this.setState({
        email: '',
        password: '',
        name: '',
      })
      window.history.go('/');
    }).catch(error => {
      window.alert("login failed");
    });

  }

  render() {
    return (
      <div>
        <Form autoComplete="off">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" onChange={this.handleChange} placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="Password" />
          </Form.Group>
        </Form>
        <div className='row login-button'>
          <div className='col-md-6 '>
            <Link to="/signup">
              <Button variant="primary">
                <span id="button-text">
                  가입
                </span>
              </Button>
            </Link>
          </div>
          <div className='col-md-6'>
            <Button variant="primary" onClick={this.handleLoginUser}>
              <span id="button-text">
                로그인
              </span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;