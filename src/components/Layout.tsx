import * as React from "react";
import { Component, Fragment } from "react";
import "../styles/main.scss";
import Navbar from "./Navbar/Navbar";
import WarningMessage from "../components/WarningMessage";
import Footer from "./Footer/Footer";
import ScrollLock from "react-scrolllock";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        {this.props.children}
        <Footer />
        <WarningMessage>
          This website does not support your browser. Consider upgrading or
          switching off IE.
        </WarningMessage>
      </Fragment>
    );
  }
}

export default Layout;
