import React from 'react';
import Header from './components/Header'
import MainBody from './components/MainBody';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import './css/responsive.css';

//화면의 내용 출력
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <MainBody />
          <SideMenu />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
