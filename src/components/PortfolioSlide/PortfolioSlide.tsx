import * as React from "react";
import { Component } from "react";
import portfolioImage from "../../assets/portfolio-img.jpg";
import { throttle, Cancelable } from "lodash";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default class PortfolioSlide extends Component<any, any> {
  state = {
    className: "portfolio-slide",
    display: { display: "none" }
  };

  render() {
    const { portfolio_title, portfolio_card, portfolio_card1 } = this.props;
    return (
      <div className={this.state.className} style={this.state.display}>
        <h1 className="title">{portfolio_title}</h1>
        <Link to={`/portfolio${portfolio_card.url}`} className="portfolio-card">
          <Img
            fluid={
              portfolio_card.document[0].data.thumbnail_image.localFile
                .childImageSharp.fluid
            }
            alt=""
            className="image"
          />
          <div className="title-shade">
            <h2 className="card-title">
              {portfolio_card.document[0].data.thumbnail_title.text}
            </h2>
          </div>
        </Link>
        <Link
          to={`/portfolio${portfolio_card1.url}`}
          className="portfolio-card"
        >
          <Img
            fluid={
              portfolio_card1.document[0].data.thumbnail_image.localFile
                .childImageSharp.fluid
            }
            alt=""
            className="image"
          />
          <div className="title-shade">
            <h2 className="card-title">
              {portfolio_card1.document[0].data.thumbnail_title.text}
            </h2>
          </div>
        </Link>
        <Link to={"/portfolio"} className="link">
          <button className="button">See more</button>
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
        className: "portfolio-slide animated slideOutRight"
      });
    } else {
      this.setState({
        className: "portfolio-slide animated slideInRight",
        display: { display: "flex" }
      });
    }
  };
}
