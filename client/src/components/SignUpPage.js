import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SignUpPage extends React.Component {
    render() {
        const divStyle = {
            height: "800px",
        }
        const inputStyle = {
            display: "none"
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
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control autoComplete="new-password" type="email" placeholder="email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control autoComplete="new-password" type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                </Form>
                <div>
                    <Link to="/">
                        <Button variant="danger" onClick={this.signUp} style={left}>
                            Back
                        </Button>
                    </Link>
                    <Button variant="success" style={right}>
                        Confirm
                    </Button>
                </div>

            </div>
        );
    }
}

export default SignUpPage;