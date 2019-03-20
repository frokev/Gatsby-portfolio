import * as React from "react";
import { Component } from "react";
import { throttle, Cancelable } from "lodash";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default class AboutSlide extends Component<any, any> {
  state = {
    className: "about-slide",
    display: { display: "none" }
  };

  render() {
    const { about_title, about_image, about_text } = this.props;
    return (
      <div className={this.state.className} style={this.state.display}>
        <h1 className="title">{about_title}</h1>
        <Img
          fluid={about_image.localFile.childImageSharp.fluid}
          alt="portrait"
          className="image"
        />
        <div
          className="textarea"
          dangerouslySetInnerHTML={{ __html: about_text.html }}
        />
        <Link to={"/about"} className="link">
          <button className="button">Read more</button>
        </Link>
      </div>
    );
  }

  throttledHandleScroll:
    | ((event: any) => void) & Cancelable
    | undefined = undefined;

  componentDidMount() {
    window.addEventListener(
      "wheel",
      (this.throttledHandleScroll = throttle(this.handleScroll, 300))
    );
  }

  componentWillUnmount() {
    if (!this.throttledHandleScroll) return;
    this.throttledHandleScroll.cancel();
    window.removeEventListener("wheel", this.throttledHandleScroll);
  }

  handleScroll = (event: any) => {
    if (window.innerWidth < 1000 || window.innerHeight < 730) return;
    if (event.deltaY < 0) {
      this.setState({
        className: "about-slide animated slideOutLeft"
      });
    } else {
      this.setState({
        className: "about-slide animated slideInLeft",
        display: { display: "flex" }
      });
    }
  };
}
