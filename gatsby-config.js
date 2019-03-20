require("dotenv").config();

//const prismicHtmlSerializer = require("./src/gatsby/htmlSerializer");

const website = require("./config/website");

const path = require("path");

const pathPrefix = website.pathPrefix === "/" ? "" : website.pathPrefix;

module.exports = {
  /* General Information */
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook
  },
  /* Plugins */
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "gatsby-portfolio",
        accessToken: `${process.env.API_KEY}`,
        // Get the correct URLs in blog posts
        linkResolver: () => (post) => `/${post.uid}`
        // PrismJS highlighting for labels and slices
        // htmlSerializer: () => prismicHtmlSerializer
      }
    },
    {
      resolve: "gatsby-plugin-ts-loader",
      options: {
        tslint: false // false or exclude to disable tslint
      }
    },
    "gatsby-plugin-lodash",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`)
      }
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "config/typography.js"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: website.googleAnalyticsID
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: "standalone",
        icon: website.favicon
      }
    },
    // Must be placed at the end
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify"
  ]
};
