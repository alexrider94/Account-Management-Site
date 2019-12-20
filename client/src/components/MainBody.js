import React from 'react';
import '../css/MainBody.css';
import StudyCard from './StudyCard';

class MainBody extends React.Component {
  render(){
    return(
      <div className="main-background">
        <StudyCard />
      </div>
    );
  }
}


export default MainBody;
