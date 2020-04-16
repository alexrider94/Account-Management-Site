import React from 'react';
import '../css/MainBody.css';
import StudyCard from './StudyCard';
import { SignUpPage } from '../pages';
import { Route } from 'react-router-dom';

class MainBody extends React.Component {
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
