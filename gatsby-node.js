const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

// Add slugs to each Markdown node
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages`});
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

// Create a post page for every Word post
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fields.slug.match(/\/word\//)) {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
            }
          });
        }
      });
      resolve();
    });
  });
};
