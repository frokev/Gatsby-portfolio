import * as React from "react";
import { Component } from "react";
import Container from "../../components/Container";
import { graphql } from "gatsby";
import Link from "gatsby-link";
import Layout from "../../components/Layout";

export default class PortfolioPost extends Component<any, any> {
  render() {
    const { data, uid } = this.props.data.prismicPortfolioPost;
    const { portfolio_content } = data;
    return (
      <Layout>
        <div className="PortfolioPost">
          <Container>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/portfolio" className="link">
                    Portfolio
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {uid}
                </li>
              </ol>
            </nav>

            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: portfolio_content.html }}
            />
          </Container>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPortfolioPost(uid: { eq: $uid }) {
      uid
      data {
        portfolio_content {
          html
        }
      }
    }
  }
`;
