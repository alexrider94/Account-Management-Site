import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import "./css/responsive.css";

//화면의 내용 출력
class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
