const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// Helper function to run graphql query to collect Markdown pages, and build up nodes.
async function createMdPages(createPage, graphql) {
  const blogPost = path.resolve(`./src/templates/md-post.tsx`);

  // Blog
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
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
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const allPosts = result.data.allMarkdownRemark.edges;

  // Split up by category: blog, tech
  const postMap = allPosts.reduce((acc, cur) => {
    const key = cur.node.fields.slug.split("/")[1];
    if (!(key in acc)) {
      acc[key] = [];
    }
    acc[key].push(cur);
    return acc;
  }, {});

  Object.entries(postMap).forEach(([key, posts]) => {
    console.log("Generating", key);
    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });
  });
}

async function createTheaterPages(createPage, graphql) {
  const theaterPost = path.resolve(`./src/templates/fountain-post.tsx`);

  // Theater
  const result = await graphql(
    `
      {
        allFountain {
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
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allFountain.edges;

  // TODO this is broken
  posts.forEach((post) => {
    createPage({
      path: post.node.fields.slug,
      component: theaterPost,
      context: {
        slug: post.node.fields.slug,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await createMdPages(createPage, graphql);
  await createTheaterPages(createPage, graphql);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // TODO make these shared constants
  if (
    node.internal.type === `MarkdownRemark` ||
    node.internal.type === `Fountain`
  ) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

/*
Old code that separates secret blog from blog
const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// This function generates pages from static files. We want to use this to
// separately create *blog pages*, linked together and sorted, and miscellaneous
// markdown pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const mdPost = path.path.resolve("./src/templates/md-post.tsx");

  return new Promise((path.resolve, reject) => {
    path.resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
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
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create markdown pages.
        const posts = result.data.allMarkdownRemark.edges;

        let next = null;
        let temp = null;

        // previous is at the end, next is at index 0
        _.each(posts, post => {
          if (post.node.fields.slug.startsWith("/secret-blog")) {
            if (temp) {
              // Attach self as temp's previous
              temp.context.previous = post.node;
              createPage(temp);
            }

            // If the current node is a blog post, we need to hold off on creating
            // the page until we have next and previous
            temp = {
              path: post.node.fields.slug,
              component: mdPost,
              context: {
                slug: post.node.fields.slug,
                previous: null,
                next,
              },
            };
            next = post.node;
          } else {
            // simple markdown
            createPage({
              path: post.node.fields.slug,
              component: mdPost,
              context: {
                slug: post.node.fields.slug,
              },
            });
          }
        });

        // fencepost
        if (temp) {
          createPage(temp);
        }
      })
    );
  });
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
*/
