import * as React from "react";
import { Component } from "react";
import Container from "../../components/Container";
import { Link } from "gatsby";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <p className="copyright-text">© Kevin Frostad</p>
          <div className="link-wrapper">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/about" className="link">
              About
            </Link>
            <Link to="/portfolio" className="link">
              Portfolio
            </Link>
            <Link to="contact" className="link">
              Contact
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}
