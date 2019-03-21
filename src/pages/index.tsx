import * as React from "react";
import { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Icon, { EIcon } from "../components/Icon";
import Layout from "../components/Layout";
import PortfolioSlide from "../components/PortfolioSlide/PortfolioSlide";
import AboutSlide from "../components/AboutSlide/AboutSlide";
import { throttle, Cancelable } from "lodash";
import ScrollLock from "react-scrolllock";

export interface Props {
  children?: React.ReactNode;
  data: any;
}

export default class HomePage extends Component<Props, any> {
  state = {
    isScrollLock: true
  };

  render() {
    const { data } = this.props.data.prismicHomepage;
    const {
      rounded_portrait,
      background_image,
      landing_title,
      landing_subtitle,
      typewriter_skills,

      about_title,
      about_image,
      about_text,

      portfolio_title,
      portfolio_card,
      portfolio_card1
    } = data;

    const skillList = typewriter_skills.map((x) => x.skill);
    const Typewriter = this.Typewriter;

    return (
      <ScrollLock
        isActive={this.state.isScrollLock}
        accountForScrollbars={false}
      >
        <PortfolioSlide
          portfolio_title={portfolio_title}
          portfolio_card={portfolio_card}
          portfolio_card1={portfolio_card1}
        />
        <AboutSlide
          about_title={about_title}
          about_image={about_image}
          about_text={about_text}
        />
        <Layout>
          <div className="HomePage">
            <div className="bg-image-wrapper">
              <Img
                fluid={background_image.localFile.childImageSharp.fluid}
                className="image"
              />
            </div>
            <div className="content-wrapper">
              <Img
                fluid={rounded_portrait.localFile.childImageSharp.fluid}
                className="selfie-rounded"
              />
              <h1 className="title">{landing_title.text}</h1>
              <h2 className="subtitle">{landing_subtitle.text}</h2>
              {Typewriter && (
                <Typewriter
                  options={{
                    delay: 300,
                    strings: skillList,
                    autoStart: true,
                    loop: true
                  }}
                />
              )}
              <div className="icons-wrapper">
                <Icon icon={EIcon.Facebook} />
                <Icon icon={EIcon.Twitter} />
                <Icon icon={EIcon.LinkedIn} />
                <Icon icon={EIcon.Github} />
              </div>
            </div>
          </div>
        </Layout>
      </ScrollLock>
    );
  }

  Typewriter: any = undefined;
  throttledHandleResize: (() => void) & Cancelable | undefined = undefined;
  componentDidMount() {
    //imports that require window to be visible
    try {
      //@ts-ignore
      this.Typewriter = require("typewriter-effect");
      this.forceUpdate();
    } catch (e) {
      console.error(e);
    }

    window.scrollTo(0, 0);
    if (window.innerWidth < 1000 || window.innerHeight < 730) {
      this.setState({
        isScrollLock: false
      });
    }

    addEventListener(
      "resize",
      (this.throttledHandleResize = throttle(this.handleResize, 300))
    );
  }

  componentWillUnmount() {
    if (!this.throttledHandleResize) return;
    this.throttledHandleResize.cancel();
    removeEventListener("resize", this.throttledHandleResize);
  }

  handleResize = () => {
    if (window.innerWidth < 1000 || window.innerHeight < 730) {
      this.setState({
        isScrollLock: false
      });
    } else {
      this.setState({
        isScrollLock: true
      });
    }
  };
}

export const pageQuery = graphql`
  query {
    prismicHomepage {
      data {
        landing_title {
          text
        }
        landing_subtitle {
          text
        }
        typewriter_skills {
          skill
        }
        background_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        rounded_portrait {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }

        about_title
        about_image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        about_text {
          html
        }

        portfolio_title
        portfolio_card {
          url
          document {
            data {
              thumbnail_title {
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
        portfolio_card1 {
          url
          document {
            data {
              thumbnail_title {
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
  }
`;
