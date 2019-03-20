import * as React from "react";
import { Component } from "react";
import tripImage from "../../assets/kevin_pa_tur.jpg";
import Layout from "../../components/Layout";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import MapsContainer from "../../components/MapsContainer";

export default class AboutPage extends Component<any, any> {
  render() {
    const { data } = this.props.data.prismicAboutpage;
    const {
      page_title,
      text_block_1_image,
      text_block_1,
      text_block_2_title,
      text_block_2
    } = data;
    return (
      <Layout>
        <div className="about-page">
          <div className="content-wrapper">
            <h1 className="page-title">{page_title.text}</h1>
            <div className="section-about">
              <div className="image-wrapper">
                <Img
                  fluid={text_block_1_image.localFile.childImageSharp.fluid}
                  alt="Image"
                  className="image"
                />
              </div>
              <div className="text-content">
                <p className="paragraph">{text_block_1.text}</p>
              </div>
            </div>
            <div className="section-about">
              <div className="text-content">
                <h2 className="title">{text_block_2_title.text}</h2>
                <p className="paragraph">{text_block_2.text}</p>
              </div>
              <div className="image-wrapper">
                <MapsContainer
                  style={{
                    width: "480px",
                    height: "280px"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    prismicAboutpage {
      data {
        page_title {
          text
        }
        text_block_1_image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        text_block_1 {
          text
        }
        text_block_2_title {
          text
        }
        text_block_2 {
          text
        }
      }
    }
  }
`;
