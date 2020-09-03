import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../api/api";

class SignUpPage extends React.Component {
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

  handleCreatUser = async () => {
    const { email, password, name } = this.state;
    const payload = { email, password, name };

    await api.insertUser(payload);
  };

  render() {
    //CSS STYLE
    const divStyle = {
      height: "800px",
    };
    const FormStyle = {
      marginLeft: "20%",
      paddingTop: "5%",
      paddingBottom: "5%",
    };
    const left = {
      float: "left",
    };

    const right = {
      float: "right",
    };
    const h1Style = {
      paddingTop: "5%",
      textAlign: "center",
    };

    return (
      <div style={divStyle}>
        <h3 style={h1Style}>회원가입</h3>
        <div style={FormStyle}>
          <Form>
            <Form.Group as={Row} role="form">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="6">
                <Form.Control
                  name="email"
                  defaultValue={this.state.email}
                  onChange={this.handleChange}
                  autoComplete="new-password"
                  type="email"
                  placeholder="email"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} role="form">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="6">
                <Form.Control
                  name="password"
                  defaultValue={this.state.password}
                  onChange={this.handleChange}
                  autoComplete="new-password"
                  type="password"
                  placeholder="password"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} role="form">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="6">
                <Form.Control
                  name="name"
                  defaultValue={this.state.name}
                  onChange={this.handleChange}
                  autoComplete="new-password"
                  type="text"
                  placeholder="name"
                />
              </Col>
            </Form.Group>

            <Link to="/">
              <Button variant="danger" style={left}>
                Back
              </Button>
            </Link>
            <Button
              variant="success"
              onClick={this.handleCreatUser}
              style={right}
            >
              Confirm
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
