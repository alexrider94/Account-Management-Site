import React from 'react';
import '../css/MainBody.css';
import StudyCard from './StudyCard';
import { SignUpPage } from '../pages';
import { Route } from 'react-router-dom';

class MainBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      logged: false
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
    const email = window.sessionStorage.getItem('email');
    if (email) {
      this.onLogin();
    }
    else {
      this.onLogout();
    }
  }

  render() {

    return (
      <div className="main-background">
        <Route exact path="/" component={StudyCard} />
        <Route path="/signup" component={SignUpPage} />
      </div>
    );
  }
}


export default MainBody;
