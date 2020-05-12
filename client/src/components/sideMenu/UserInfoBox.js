import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class UserInfoBox extends React.Component {

    state = {
        email: window.sessionStorage.getItem('email')
    }

    logout() {
        window.sessionStorage.clear();
        window.location.href="/";
    }

    render() {
        return (
            <div>
                <div>
                    <b>Welcome!</b>
                    <h5>{this .state.email} </h5>
                </div>
                <div>
                    <Link to="/addcard">
                        <Button variant="info" size="lg" block>
                            Add Card
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link to="/userinfo">
                        <Button variant="dark" size="lg" block>
                            Change Info
                        </Button>
                    </Link>
                </div>
                <div>
                    <Button variant="danger" size="lg" block onClick={this.logout}>logout</Button>
                </div>
            </div>
        )
    };
}

export default UserInfoBox;