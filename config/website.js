module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Kevin Frostad", // Navigation and Site Title
  titleAlt: "Kevin Frostad Portfolio", // Title for JSONLD
  description: "Fullstack React developer",
  headline: "Fullstack React developer", // Headline for schema.org JSONLD
  url: "https://kevinfrostad.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  logo: "/logos/logo-1024.png", // Used for SEO
  ogLanguage: "en_US", // Facebook Language

  // JSONLD / Manifest
  favicon: "src/favicon.png", // Used for manifest favicon generation
  shortName: "Prismic", // shortname for manifest. MUST be shorter than 12 characters
  author: "LekoArts", // Author for schemaORGJSONLD
  themeColor: "#3D63AE",
  backgroundColor: "#EBEDF2",

  twitter: "@frokev", // Twitter Username
  facebook: "Kevin Frostad", // Facebook Site Name

  skipNavId: "reach-skip-nav" // ID for the "Skip to content" a11y feature
};
