import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../api/api";

class SignInBox extends React.Component {
  render() {
    return (
      <div>
        <Form autoComplete="off">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={this.handleChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={this.handleChange}
              placeholder="Password"
            />
          </Form.Group>
        </Form>
        <div className="row login-button">
          <div className="col-md-6 ">
            <Link to="/signup">
              <Button variant="primary">
                <span id="button-text">SignUp</span>
              </Button>
            </Link>
          </div>
          <div className="col-md-6">
            <Button variant="primary" onClick={this.login}>
              <span id="button-text">SignIn</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  state = {
    email: "",
    password: "",
    name: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = async () => {
    const { email, password } = this.state;
    const payload = { email, password };

    const result = await api.login(payload);

    const loggedEmail = result.data.result[0].email;
    window.sessionStorage.setItem("email", loggedEmail);

    this.history.back("/");
  };
}

export default SignInBox;
