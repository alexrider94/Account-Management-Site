import React from 'react';
import '../css/SideMenu.css';
import LoginForm from './LoginForm';
import MenuForm from './MenuForm';
import UserInfoBox from './UserInfoBox';

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      email: ""
    }
  }

  onLogin = () => {
    this.setState({
      logged: true
    })
  }

  onLogout = () => {
    this.setState({
      logged: false
    })
    window.sessionStorage.clear();
  }

  componentDidMount() {
    this.email = window.sessionStorage.getItem('email');
    if (this.email) {
      this.onLogin();
    }
    else {
      this.onLogout();
    }
  }

  render() {
    const { logged } = this.state;

    return (
      <div className="sideMenu-background">
        <div>
          {
            logged ?
              (
                <div className="userbox">
                  <UserInfoBox />
                </div>
              )
              :
              (
                <div className="userbox">
                  <LoginForm />
                </div>
              )
          }
        </div>

        <div className="menubox">
          <MenuForm />
        </div>
      </div>
    );
  }
}

export default SideMenu;
