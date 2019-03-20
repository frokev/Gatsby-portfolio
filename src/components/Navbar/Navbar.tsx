import * as React from "react";
import { Component, Fragment } from "react";
import Drawer from "../../components/Drawer/Drawer";
import Container from "../../components/Container";
import { Link } from "gatsby";

export default class Navbar extends Component<any, any> {
  state = {
    brandName: "Kevin Frostad",
    toggleDrawerAnim: false,
    isDrawerActive: false
  };

  render() {
    let { Buttons, HandleDrawer } = this;

    return (
      <div className="navbar">
        <Container>
          <i className="drawer-icon" onClick={this.toggleDrawer}>
            menu
          </i>
          <h1 className="brand">{this.state.brandName}</h1>
          <div className="buttons-wrapper">
            <Buttons />
          </div>
        </Container>
        <HandleDrawer />
      </div>
    );
  }

  HandleDrawer = () => {
    let { toggleDrawer, Buttons } = this;
    if (!this.state.isDrawerActive) return null;
    if (this.state.toggleDrawerAnim)
      return (
        <Drawer slideIn onShouldSlideOut={toggleDrawer}>
          <Buttons />
        </Drawer>
      );
    else
      return (
        <Drawer slideOut onShouldSlideOut={toggleDrawer}>
          <Buttons />
        </Drawer>
      );
  };

  toggleDrawer = () => {
    if (!this.state.isDrawerActive) {
      this.setState({
        isDrawerActive: true,
        toggleDrawerAnim: true
      });
      return;
    }
    this.setState({
      toggleDrawerAnim: !this.state.toggleDrawerAnim
    });
  };

  Buttons = () => {
    return (
      <Fragment>
        <Link to={"/"} activeClassName="active" className="button">
          Home
        </Link>
        <Link to={"/about"} activeClassName="active" className="button">
          About
        </Link>
        <Link to={"/portfolio"} activeClassName="active" className="button">
          Portfolio
        </Link>
        <Link to={"/contact"} activeClassName="active" className="button">
          Contact
        </Link>
      </Fragment>
    );
  };
}
