import React from 'react';
import { Button } from 'react-bootstrap';

class UserInfoBox extends React.Component {

    state = {
        email: window.sessionStorage.getItem('email')
    }

    logout() {
        window.sessionStorage.clear();
        window.history.go('/');
    }

    render() {
        return (
            <div>
                <div>
                    Welcome! {this.state.email}
                </div>
                <Button className="child" variant="danger" onClick={this.logout}>logout</Button>
            </div>
        )
    };
}

export default UserInfoBox;