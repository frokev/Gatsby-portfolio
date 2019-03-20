const path = require("path");
const _ = require("lodash");

// graphql function returns a promise so we can use this little promise helper to have a nice result/error state
const wrapper = (promise) =>
  promise
    .then((result) => {
      if (result.errors) {
        throw result.errors;
      }
      return { result, error: null };
    })
    .catch((error) => ({ error, result: null }));

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const portfolioPost = path.resolve(
    "src/templates/PortfolioPost/PortfolioPost.tsx"
  );

  const { error, result } = await wrapper(
    graphql(`
      {
        allPrismicPortfolioPost {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `)
  );

  if (!error) {
    const postsList = result.data.allPrismicPortfolioPost.edges;

    // Double check that the post has a category assigned
    postsList.forEach((edge) => {
      // The uid you assigned in Prismic is the slug!
      createPage({
        path: `/portfolio/${edge.node.uid}`,
        component: portfolioPost,
        context: {
          // Pass the unique ID (uid) through context so the template can filter by it
          uid: edge.node.uid
        }
      });
      return;
    });
  }
  console.log(error);
};
