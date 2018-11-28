const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

function query(isBlog) {
  return;
  `
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      ${isBlog ? 'filter: { fields: { slug: { regex: "//blog/.*/" } } }' : ""}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
  `;
}

// This function generates pages from static files. We want to use this to
// separately create *blog pages*, linked together and sorted, and miscellaneous
// markdown pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const mdPost = path.resolve("./src/templates/md-post.js");

  const blogPromise = new Promise((resolve, reject) => {
    resolve(
      graphql(query(true)).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: mdPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          });
        });
      })
    );
  });
  const otherPromise = new Promise((resolve, reject) => {
    resolve(
      graphql(query(true)).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create other posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        _.each(
          _.filter(posts, post => !post.node.fields.slug.startsWith("/blog")),
          post => {
            createPage({
              path: post.node.fields.slug,
              component: mdPost,
              context: {
                slug: post.node.fields.slug,
              },
            });
          }
        );
      })
    );
  });

  return Promise.all([blogPromise, otherPromise]);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};
