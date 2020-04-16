import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SignUpPage extends React.Component {

    state = {
        email: "",
    }

    handleChange = (e) => {
        this.setState(
            {
                email: e.target.value
            }
        )

        alert(this.state.email);
    }

    render() {
        //CSS STYLE
        const divStyle = {
            height: "800px"
        }
        const FormStyle = {
            marginLeft: "20%",
            paddingTop: "5%",
            paddingBottom: "5%"
        }
        const left = {
            float: "left"
        }

        const right = {
            float: "right"
        }


        //Browser Auto Complete Block
        //autoComplete = "new-password"
        return (
            <div style={divStyle}>
                <div style={FormStyle}>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">
                                Email
                        </Form.Label>
                            <Col sm="6">
                                <Form.Control defaultValue={this.state.email} autoComplete="new-password" type="email" placeholder="email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">
                                Password
                        </Form.Label>
                            <Col sm="6">
                                <Form.Control autoComplete="new-password" type="password" placeholder="password" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">
                                Name
                        </Form.Label>
                            <Col sm="6">
                                <Form.Control autoComplete="new-password" type="text" placeholder="name" />
                            </Col>
                        </Form.Group>
                        <Link to="/">
                            <Button variant="danger" onClick={this.signUp} style={left}>
                                Back
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button variant="success" style={right} onClick={this.handleChange}>
                                Confirm
                            </Button>
                        </Link>
                    </Form>
                </div>
            </div>
        );
    }
}

export default SignUpPage;