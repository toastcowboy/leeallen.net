const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// Create a post page for every Word post
// Somewhat based on this section of the Gatsby docs:
// https://www.gatsbyjs.org/docs/creating-and-modifying-pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/post.js`);

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    path
                    type
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          if (node.frontmatter.type === `Word Post`) {
            const path = node.frontmatter.path;

            createPage({
              path,
              component: postTemplate,
              context: {
                slug: path,
              },
            });
          }
        })
      })
    )
  })
};
