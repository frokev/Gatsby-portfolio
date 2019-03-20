import * as React from "react";
import { Component } from "react";
import { graphql } from "gatsby";
import Link from "gatsby-link";
import Layout from "../../components/Layout";
import Img from "gatsby-image";

export default class PortfolioPage extends Component<any, any> {
  render() {
    const { data } = this.props.data.prismicPortfoliopage;
    const { edges } = this.props.data.allPrismicPortfolioPost;
    const { page_title } = data;
    return (
      <Layout>
        <div className="portfolio-page">
          <div className="content-wrapper">
            <h1 className="page-title">{page_title.text}</h1>

            <div className="cards-wrapper">
              {edges.map((x, index) => {
                const {
                  thumbnail_title,
                  thumbnail_text,
                  thumbnail_image
                } = x.node.data;
                return (
                  <Link to={`/portfolio/${x.node.uid}`} className="card">
                    <div className="image-wrapper">
                      <Img
                        fluid={thumbnail_image.localFile.childImageSharp.fluid}
                        alt="Portfolio image"
                        className="image"
                      />
                      <h2 className="card-title">{thumbnail_title.text}</h2>
                    </div>
                    <div className="paragraph-wrapper">
                      <p>{thumbnail_text.text}</p>
                    </div>
                  </Link>
                );
              })}
              {/* <Link to="/portfolio" className="card">
              <div className="image-wrapper">
              <img src={portfolioImg} alt="Portfolio image" />
              <h2 className="card-title">Best project ever</h2>
              </div>
              <div className="paragraph-wrapper">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam at porttitor sem.  Aliquam erat volutpat.
              </p>
              </div>
            </Link> */}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    prismicPortfoliopage {
      data {
        page_title {
          text
        }
      }
    }
    allPrismicPortfolioPost {
      edges {
        node {
          uid
          data {
            thumbnail_title {
              text
            }
            thumbnail_text {
              text
            }
            thumbnail_image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
