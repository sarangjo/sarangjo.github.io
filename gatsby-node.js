const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// Helper function to run graphql query to collect Markdown pages, and build up nodes.
async function createMdPages(createPage, graphql) {
  const blogPost = path.resolve(`./src/templates/md-post.tsx`);

  // Query for all markdown pages, sorted ascending by date
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

  // Split up by category based on the folder: e.g. blog, tech, etc.
  const postMap = allPosts.reduce((acc, cur) => {
    const key = cur.node.fields.slug.split("/")[1];
    if (!(key in acc)) {
      acc[key] = [];
    }
    acc[key].push(cur);
    return acc;
  }, {});

  // Go through all of our markdown objects and add links to previous/next to show in the footer
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

// Helper function to build theater pages
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

  posts.forEach((post) => {
    createPage({
      path: post.node.fields.slug,
      component: theaterPost,
      // this context is used by the page query for each fountain-post.tsx
      context: {
        slug: post.node.fields.slug,
      },
    });
  });
}

// Helper function to build indices (blog, theater, poetry)
async function createIndexPages(createPage) {
  const indices = [
    {
      slug: "poetry",
      title: "Poetry",
      description:
        "No fancy description. Just poetry. This is serious business.",
    },
  ];

  indices.forEach((ind) =>
    createPage({
      path: `/${ind.slug}/`,
      matchPath: `/${ind.slug}`,
      component: path.resolve(`./src/templates/contentIndex.tsx`),
      context: {
        myPath: `//${ind.slug}/.*/`,
        title: ind.title,
        description: ind.description,
      },
    })
  );
}

// Create all of our dynamic pages (i.e. outside of `src/pages`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await createMdPages(createPage, graphql);
  await createTheaterPages(createPage, graphql);
  await createIndexPages(createPage);
};

// For markdown and fountain pages, extend the node's fields by appending the slug. This allows us
// to use the slug in data queries on these objects
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
